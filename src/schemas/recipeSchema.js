import { z } from "zod";

/** Normalize `category` + `categories` from Drive / cache (comma-separated or array). */
function normalizeRecipeCategories(input) {
  if (!input || typeof input !== "object") return input;
  const o = { ...input };
  /** @type {string[]} */
  let cats = [];
  if (Array.isArray(o.categories) && o.categories.length > 0) {
    cats = o.categories
      .map((c) => String(c).trim().replace(/\s+/g, " "))
      .filter(Boolean);
  }
  if (
    cats.length === 0 &&
    typeof o.category === "string" &&
    o.category.trim()
  ) {
    cats = o.category
      .split(",")
      .map((s) => s.trim().replace(/\s+/g, " "))
      .filter(Boolean);
  }
  if (cats.length === 0) cats = ["כללי"];
  const seen = new Set();
  cats = cats.filter((c) => (seen.has(c) ? false : (seen.add(c), true)));
  o.categories = cats;
  o.category = cats[0];
  return o;
}

/** Missing or invalid servings → null (no מנות line / bad data). */
function normalizeRecipeServings(input) {
  if (!input || typeof input !== "object") return input;
  const o = { ...input };
  const s = o.servings;
  if (s === undefined || s === null) {
    o.servings = null;
  } else if (
    typeof s !== "number" ||
    !Number.isFinite(s) ||
    !Number.isInteger(s) ||
    s < 1
  ) {
    o.servings = null;
  } else {
    o.servings = s;
  }
  return o;
}

function normalizeRecipeInput(input) {
  return normalizeRecipeServings(normalizeRecipeCategories(input));
}

const IngredientSchema = z.object({
  id: z.string(),
  name: z.string(),
  amount: z.number(),
  unit: z.string(),
});

const StepSchema = z.object({
  id: z.string(),
  text: z.string(),
  timer: z.number().nullable(),
  warning: z.string().nullable(),
});

const SectionSchema = z.object({
  title: z.string(),
  steps: z.array(StepSchema),
});

const RecipeSchemaBase = z.object({
  id: z.string(),
  title: z.string(),
  /** Optional lines under the title in .docx (הערה:) */
  note: z.string().default(""),
  /** First category (same as categories[0]); kept for compatibility */
  category: z.string(),
  /** All categories; קטגוריה: in .docx may list several separated by commas */
  categories: z.array(z.string()).min(1),
  /** דרגת קושי from .docx metadata */
  difficulty: z.string().default(""),
  tags: z.array(z.string()),
  emoji: z.string(),
  cookTime: z.string(),
  /** From מנות: in .docx; null when not specified */
  servings: z.union([z.number().int().positive(), z.null()]),
  ingredients: z.array(IngredientSchema),
  sections: z.array(SectionSchema),
});

export const RecipeSchema = z.preprocess(
  normalizeRecipeInput,
  RecipeSchemaBase,
);
