import { recipeFromDocxArrayBuffer } from "./docxRecipe.js";
import { DriveAccessError } from "./driveErrors.js";

const DRIVE_FILES = "https://www.googleapis.com/drive/v3/files";

function driveLog(...args) {
  console.log("[recipes/drive]", ...args);
}

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
 * @returns {Promise<ArrayBuffer>}
 */
async function getDriveFileNameApiKey(fileId, apiKey) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?fields=name&supportsAllDrives=true&key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive files.get metadata");
  }
  const data = await res.json();
  return (data.name && String(data.name)) || "recipe.docx";
}

async function getDriveFileNameOAuth(fileId, accessToken) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?fields=name&supportsAllDrives=true`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive files.get metadata");
  }
  const data = await res.json();
  return (data.name && String(data.name)) || "recipe.docx";
}

async function fetchDriveFileBytesApiKey(fileId, apiKey) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?alt=media&supportsAllDrives=true&key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive API");
  }
  return res.arrayBuffer();
}

/**
 * @param {string} fileId
 * @param {string} accessToken
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchDriveFileBytesOAuth(fileId, accessToken) {
  const url = `${DRIVE_FILES}/${encodeURIComponent(fileId)}?alt=media&supportsAllDrives=true`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const text = await res.text();
    throwDriveHttpError(res, text, "Drive API");
  }
  return res.arrayBuffer();
}

const FOLDER_MIME = "application/vnd.google-apps.folder";
const DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

/**
 * Direct children of the folder whose names end in `.docx` (case-insensitive). Folders excluded.
 *
 * @param {string} folderId
 * @param {string} accessToken
 * @returns {Promise<{ id: string, name: string, mimeType?: string }[]>}
 */
export async function listDocxFilesInFolder(folderId, accessToken) {
  const q = [`'${folderId}' in parents`, "trashed = false"].join(" and ");
  const params = new URLSearchParams({
    q,
    fields: "files(id,name,mimeType)",
    pageSize: "100",
    supportsAllDrives: "true",
    includeItemsFromAllDrives: "true",
    corpora: "allDrives",
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
  return getFilesAndFolders(data);
}

function getFilesAndFolders(data) {
  const raw = data.files || [];
  const files = [];
  const folders = [];
  for (const f of raw) {
    if ((f.mimeType || "") === DOCX_MIME) {
      files.push(f);
    } else if ((f.mimeType || "") === FOLDER_MIME) {
      folders.push(f);
    }
  }
  return { files, folders };
}

/**
 * One public .docx file (API key) → one recipe.
 */
export async function loadRecipesFromDriveApiKey(fileId, apiKey) {
  const name = await getDriveFileNameApiKey(fileId, apiKey);
  const buf = await fetchDriveFileBytesApiKey(fileId, apiKey);
  const recipe = await recipeFromDocxArrayBuffer(fileId, name, buf);
  driveLog("api key file", fileId, "→ recipe:", recipe.title);
  return { recipes: [recipe], tagEmoji: undefined };
}

/**
 * One shared .docx file (OAuth) → one recipe.
 */
export async function loadRecipesFromDriveOAuthFile(fileId, accessToken) {
  const name = await getDriveFileNameOAuth(fileId, accessToken);
  const buf = await fetchDriveFileBytesOAuth(fileId, accessToken);
  const recipe = await recipeFromDocxArrayBuffer(fileId, name, buf);
  driveLog("single file", fileId, "→ recipe:", recipe.title);
  return { recipes: [recipe], tagEmoji: undefined };
}

/**
 * Folder of .docx files (OAuth) → merge into one list (filename → title each).
 */
export async function loadRecipesFromDriveOAuthFolder(folderId, accessToken) {
  const {files, folders} = await listDocxFilesInFolder(folderId, accessToken);
  if (files.length === 0) {
    driveLog("folder: no .docx files (check folder id, Shared Drive, and names)");
    return { recipes: [], tagEmoji: undefined };
  }
  
  const recipes = await Promise.all(files.map(async (f) => {
    const buf = await fetchDriveFileBytesOAuth(f.id, accessToken);
    return recipeFromDocxArrayBuffer(f.id, f.name || "recipe.docx", buf);
  }));

  // Recurse into one layer of subfolders.
  for (const folder of folders) {
    const {recipes: subRecipes, } = await loadRecipesFromDriveOAuthFolder(folder.id, accessToken);
    recipes.push(...subRecipes);
  }

  driveLog("merged total recipes:", recipes.length);
  return { recipes, tagEmoji: undefined };
}
