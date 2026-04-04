import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { ZodError } from "zod";
import {
  mergeTagEmoji,
  deriveCategories,
  deriveTags,
} from "../lib/recipeCatalog.js";
import {
  getDriveMode,
  getRecipesFileId,
  getRecipesFolderId,
} from "../lib/driveConfig.js";
import {
  loadRecipesFromDriveApiKey,
  loadRecipesFromDriveOAuthFile,
  loadRecipesFromDriveOAuthFolder,
} from "../lib/driveClient.js";
import { DriveAccessError } from "../lib/driveErrors.js";
import { DriveAuthContext } from "../context/DriveAuthContext.jsx";
import { getStoredAccessToken } from "../lib/driveAuthStorage.js";
import { readCachedRecipes, writeCachedRecipes } from "../lib/recipeCache.js";

/** Loads recipes only from Google Drive (OAuth or API key). No embedded sample data. */
export function useRecipes() {
  const mode = getDriveMode();
  const { accessToken, requestLogin, logout } = useContext(DriveAuthContext);

  const [state, setState] = useState(() => {
    if (mode === "oauth_incomplete") {
      return {
        status: "error",
        recipes: [],
        tagEmoji: mergeTagEmoji(),
        recipesSource: null,
        error:
          "חסר מזהה קובץ או תיקייה ב-Google Drive. הוסיפו ל-.env את VITE_RECIPES_FILE_ID (קובץ .docx אחד) או VITE_RECIPES_FOLDER_ID (תיקייה עם קבצי .docx). בלי זה האפליקציה לא יכולה לטעון מתכונים מ-Drive.",
      };
    }
    if (mode === "static") {
      return {
        status: "error",
        recipes: [],
        tagEmoji: mergeTagEmoji(),
        recipesSource: null,
        error:
          "אין הגדרת Google Drive. הוסיפו ל-.env: (א) VITE_GOOGLE_CLIENT_ID + VITE_RECIPES_FILE_ID או VITE_RECIPES_FOLDER_ID לכניסה עם Google, או (ב) VITE_GOOGLE_API_KEY + VITE_RECIPES_FILE_ID לקובץ .docx ציבורי. המתכונים לא נטענים מקובץ מקומי באפליקציה.",
      };
    }

    const canReadCache =
      mode === "api_key" || (mode === "oauth" && getStoredAccessToken());
    const cached = canReadCache ? readCachedRecipes() : null;
    if (cached && Array.isArray(cached.recipes)) {
      return {
        status: "ready",
        recipes: cached.recipes,
        tagEmoji: mergeTagEmoji(cached.tagEmoji),
        recipesSource: "cache",
        error: null,
      };
    }

    if (mode === "api_key") {
      return {
        status: "loading",
        recipes: [],
        tagEmoji: mergeTagEmoji(),
        recipesSource: null,
        error: null,
      };
    }
    const t = getStoredAccessToken();
    return {
      status: t ? "loading" : "needs_auth",
      recipes: [],
      tagEmoji: mergeTagEmoji(),
      recipesSource: null,
      error: null,
    };
  });

  /** When hydrating from localStorage, skip the first N effect runs (N=2 in dev for Strict Mode). */
  const cacheSkipRemaining = useRef(-1);
  if (cacheSkipRemaining.current < 0) {
    cacheSkipRemaining.current =
      state.recipesSource === "cache" ? (import.meta.env.DEV ? 2 : 1) : 0;
  }

  const loadApiKey = useCallback(async () => {
    const fileId = getRecipesFileId();
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    if (!fileId || !apiKey) {
      setState((s) => ({
        ...s,
        status: "error",
        error: "Missing VITE_RECIPES_FILE_ID or VITE_GOOGLE_API_KEY",
      }));
      return;
    }
    setState((s) => ({ ...s, status: "loading", error: null }));
    try {
      const { recipes, tagEmoji } = await loadRecipesFromDriveApiKey(
        fileId,
        apiKey,
      );
      const merged = mergeTagEmoji(tagEmoji);
      setState({
        status: "ready",
        recipes,
        tagEmoji: merged,
        recipesSource: "network",
        error: null,
      });
      writeCachedRecipes(recipes, merged);
    } catch (e) {
      const msg =
        e instanceof ZodError
          ? `נתוני מתכון לא תקינים: ${e.issues[0]?.path?.join(".") || "?"} — ${e.issues[0]?.message}`
          : e instanceof Error
            ? e.message
            : String(e);
      setState((s) => ({
        ...s,
        status: "error",
        error: msg,
      }));
    }
  }, []);

  const loadOAuth = useCallback(async (token) => {
    const fileId = getRecipesFileId();
    const folderId = getRecipesFolderId();
    setState((s) => ({ ...s, status: "loading", error: null }));
    try {
      let result;
      if (folderId) {
        result = await loadRecipesFromDriveOAuthFolder(folderId, token);
      } else if (fileId) {
        result = await loadRecipesFromDriveOAuthFile(fileId, token);
      } else {
        throw new Error("Set VITE_RECIPES_FILE_ID or VITE_RECIPES_FOLDER_ID");
      }
      const { recipes, tagEmoji } = result;
      const merged = mergeTagEmoji(tagEmoji);
      setState({
        status: "ready",
        recipes,
        tagEmoji: merged,
        recipesSource: "network",
        error: null,
      });
      writeCachedRecipes(recipes, merged);
    } catch (e) {
      if (
        e instanceof DriveAccessError &&
        (e.code === "INSUFFICIENT_PERMISSION" || e.code === "NOT_FOUND")
      ) {
        setState({
          status: "no_access",
          recipes: [],
          tagEmoji: mergeTagEmoji(),
          error: e.message,
        });
        return;
      }
      const msg =
        e instanceof ZodError
          ? `נתוני מתכון לא תקינים: ${e.issues[0]?.path?.join(".") || "?"} — ${e.issues[0]?.message}`
          : e instanceof Error
            ? e.message
            : String(e);
      setState((s) => ({
        ...s,
        status: "error",
        error: msg,
      }));
    }
  }, []);

  useEffect(() => {
    if (mode === "static" || mode === "oauth_incomplete") return;

    if (cacheSkipRemaining.current > 0) {
      cacheSkipRemaining.current -= 1;
      return;
    }

    if (mode === "api_key") {
      loadApiKey();
      return;
    }
    if (mode === "oauth") {
      const token = accessToken || getStoredAccessToken();
      if (!token) {
        setState((s) => ({ ...s, status: "needs_auth", error: null }));
        return;
      }
      loadOAuth(token);
    }
  }, [mode, accessToken, loadApiKey, loadOAuth]);

  const retry = useCallback(() => {
    if (mode === "oauth_incomplete") return;
    if (mode === "api_key") loadApiKey();
    else if (mode === "oauth") {
      const token = accessToken || getStoredAccessToken();
      if (token) loadOAuth(token);
      else setState((s) => ({ ...s, status: "needs_auth" }));
    }
  }, [mode, loadApiKey, loadOAuth, accessToken]);

  const allCats = deriveCategories(state.recipes);
  const allTags = deriveTags(state.recipes);

  return {
    ...state,
    mode,
    allCats,
    allTags,
    requestLogin,
    retry,
    logout,
  };
}
