import { DEFAULT_TAG_EMOJI } from "../data/recipes.js";

const CAT_ORDER = ["מנות עיקריות", "מרקים", "תוספות"];
const TAG_ORDER = ["צהריים", "מתוקים", "צמחוני", "אירוח"];

/**
 * @param {Array<{ category: string }>} recipes
 * @returns {string[]}
 */
export function deriveCategories(recipes) {
  const present = new Set(recipes.map((r) => r.category));
  const ordered = CAT_ORDER.filter((c) => present.has(c));
  const rest = [...present].filter((c) => !CAT_ORDER.includes(c)).sort();
  return ["הכל", ...ordered, ...rest];
}

/**
 * @param {Array<{ tags: string[] }>} recipes
 * @returns {string[]}
 */
export function deriveTags(recipes) {
  const present = new Set(recipes.flatMap((r) => r.tags));
  const ordered = TAG_ORDER.filter((t) => present.has(t));
  const rest = [...present].filter((t) => !TAG_ORDER.includes(t)).sort();
  return [...ordered, ...rest];
}

/**
 * @param {Record<string, string> | undefined} fromFile
 * @returns {Record<string, string>}
 */
export function mergeTagEmoji(fromFile) {
  return { ...DEFAULT_TAG_EMOJI, ...(fromFile || {}) };
}

/**
 * @param {string} tag
 * @param {Record<string, string>} tagEmoji
 */
export function tagLabel(tag, tagEmoji) {
  const e = tagEmoji[tag];
  return e ? `${e} ${tag}` : tag;
}
