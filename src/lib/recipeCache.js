import { getDriveMode, getRecipesFileId, getRecipesFolderId } from "./driveConfig.js";

const CACHE_VERSION = 1;
const PREFIX = "rcp_recipes_cache";

/** Stable key per build config so changing .env does not reuse stale JSON. */
export function getRecipeCacheStorageKey() {
  const mode = getDriveMode();
  const fileId = getRecipesFileId();
  const folderId = getRecipesFolderId();
  return `${PREFIX}_v${CACHE_VERSION}_${mode}_${fileId}_${folderId}`;
}

/** @returns {{ recipes: unknown[], tagEmoji?: Record<string, string> } | null} */
export function readCachedRecipes() {
  try {
    const raw = localStorage.getItem(getRecipeCacheStorageKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.recipes)) return null;
    return { recipes: parsed.recipes, tagEmoji: parsed.tagEmoji };
  } catch {
    return null;
  }
}

/**
 * @param {unknown[]} recipes
 * @param {Record<string, string> | undefined} tagEmoji
 */
export function writeCachedRecipes(recipes, tagEmoji) {
  try {
    localStorage.setItem(
      getRecipeCacheStorageKey(),
      JSON.stringify({ recipes, tagEmoji: tagEmoji ?? undefined })
    );
  } catch {}
}

export function clearCachedRecipes() {
  try {
    localStorage.removeItem(getRecipeCacheStorageKey());
  } catch {}
}
