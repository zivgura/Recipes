import { z } from "zod";

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

export const RecipeSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  emoji: z.string(),
  cookTime: z.string(),
  servings: z.number(),
  ingredients: z.array(IngredientSchema),
  sections: z.array(SectionSchema),
});

export const RecipesPayloadSchema = z.union([
  z.array(RecipeSchema),
  z.object({
    recipes: z.array(RecipeSchema),
    tagEmoji: z.record(z.string()).optional(),
  }),
]);

/**
 * @param {unknown} data
 * @returns {{ recipes: import("zod").infer<typeof RecipeSchema>[], tagEmoji?: Record<string, string> }}
 */
export function parseRecipesPayload(data) {
  const parsed = RecipesPayloadSchema.parse(data);
  if (Array.isArray(parsed)) {
    return { recipes: parsed, tagEmoji: undefined };
  }
  return { recipes: parsed.recipes, tagEmoji: parsed.tagEmoji };
}
