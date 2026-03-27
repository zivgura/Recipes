import { parseRecipesPayload } from "../schemas/recipeSchema.js";
import { DriveAccessError } from "./driveErrors.js";

const DRIVE_FILES = "https://www.googleapis.com/drive/v3/files";

function throwDriveHttpError(res, text, context) {
  if (res.status === 403) {
    throw new DriveAccessError(
      `${context}: אין הרשאת צפייה ב-Google Drive (403).`,
      { status: 403, code: "INSUFFICIENT_PERMISSION" }
    );
  }
  if (res.status === 404) {
    throw new DriveAccessError(
      `${context}: הקובץ או התיקייה לא נמצאו או אינם זמינים לחשבון (404).`,
      { status: 404, code: "NOT_FOUND" }
    );
  }
  throw new Error(`${context} (${res.status}): ${text.slice(0, 200)}`);
}

/**
 * @param {string} fileId
 * @param {string} apiKey
 */
export async function fetchDriveFileJsonApiKey(fileId, apiKey) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?alt=media&key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive API");
  }
  return res.json();
}

/**
 * @param {string} fileId
 * @param {string} accessToken
 */
export async function fetchDriveFileJsonOAuth(fileId, accessToken) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?alt=media`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive API");
  }
  return res.json();
}

/**
 * @param {string} folderId
 * @param {string} accessToken
 * @returns {Promise<{ id: string, name: string }[]>}
 */
export async function listJsonFilesInFolder(folderId, accessToken) {
  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType = 'application/json'`,
    fields: "files(id,name)",
    pageSize: "100",
  });
  const url = `${DRIVE_FILES}?${params.toString()}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive files.list");
  }
  const data = await res.json();
  return data.files || [];
}

/**
 * Fetch and parse recipes from one JSON file (API key).
 */
export async function loadRecipesFromDriveApiKey(fileId, apiKey) {
  const raw = await fetchDriveFileJsonApiKey(fileId, apiKey);
  return parseRecipesPayload(raw);
}

/**
 * Fetch and parse recipes from one JSON file (OAuth).
 */
export async function loadRecipesFromDriveOAuthFile(fileId, accessToken) {
  const raw = await fetchDriveFileJsonOAuth(fileId, accessToken);
  return parseRecipesPayload(raw);
}

/**
 * Load all JSON files in a folder and merge into one recipe list.
 */
export async function loadRecipesFromDriveOAuthFolder(folderId, accessToken) {
  const files = await listJsonFilesInFolder(folderId, accessToken);
  if (files.length === 0) {
    return parseRecipesPayload([]);
  }
  const allRecipes = [];
  let mergedTagEmoji = {};
  for (const f of files) {
    const raw = await fetchDriveFileJsonOAuth(f.id, accessToken);
    const { recipes, tagEmoji } = parseRecipesPayload(raw);
    allRecipes.push(...recipes);
    if (tagEmoji) mergedTagEmoji = { ...mergedTagEmoji, ...tagEmoji };
  }
  return { recipes: allRecipes, tagEmoji: Object.keys(mergedTagEmoji).length ? mergedTagEmoji : undefined };
}
