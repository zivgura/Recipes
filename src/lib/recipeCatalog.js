import { DEFAULT_TAG_EMOJI } from "../data/recipes.js";

const CAT_ORDER = ["מנות עיקריות", "מרקים", "תוספות"];
const TAG_ORDER = ["צהריים", "מתוקים", "צמחוני", "אירוח"];

/**
 * All category labels for a recipe (comma-separated `category` is split; prefers `categories` when present).
 * @param {{ category?: string, categories?: string[] }} recipe
 * @returns {string[]}
 */
export function recipeCategoryList(recipe) {
  if (Array.isArray(recipe.categories) && recipe.categories.length > 0) {
    return recipe.categories;
  }
  if (typeof recipe.category === "string" && recipe.category.trim()) {
    return recipe.category
      .split(",")
      .map((s) => s.trim().replace(/\s+/g, " "))
      .filter(Boolean);
  }
  return ["כללי"];
}

/**
 * @param {Array<{ category?: string, categories?: string[] }>} recipes
 * @returns {string[]}
 */
export function deriveCategories(recipes) {
  const present = new Set();
  for (const r of recipes) {
    for (const c of recipeCategoryList(r)) present.add(c);
  }
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
