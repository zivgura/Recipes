/**
 * @typedef {'static' | 'api_key' | 'oauth' | 'oauth_incomplete'} DriveMode
 *
 * Intended setup: **oauth** — only people you invite in Drive can read recipes after Google sign-in.
 * **api_key** is optional for a public / “anyone with the link” file (no per-user invites).
 *
 * If both OAuth and API key are configured, **oauth wins** when a file/folder id is set.
 *
 * **oauth_incomplete**: `VITE_GOOGLE_CLIENT_ID` is set but neither file nor folder id — cannot load from Drive; do not fall back to embedded JSON.
 */

/** @returns {DriveMode} */
export function getDriveMode() {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const fileId = import.meta.env.VITE_RECIPES_FILE_ID;
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const folderId = import.meta.env.VITE_RECIPES_FOLDER_ID;

  if (clientId && (fileId || folderId)) return "oauth";
  if (clientId) return "oauth_incomplete";
  if (apiKey && fileId) return "api_key";
  return "static";
}

export function getRecipesFileId() {
  return import.meta.env.VITE_RECIPES_FILE_ID || "";
}

export function getRecipesFolderId() {
  return import.meta.env.VITE_RECIPES_FOLDER_ID || "";
}
