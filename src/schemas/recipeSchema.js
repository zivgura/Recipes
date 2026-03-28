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
