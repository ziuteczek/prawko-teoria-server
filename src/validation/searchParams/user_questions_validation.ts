import { categoriesSizesMap } from "db/questions_categories";
import { JsonParse } from "helpers";
import { z } from "zod/v4";

export const userQuestionsSchema = z.object({
  limit: z.coerce.number().max(60).min(1).int(),
  category: z.string().refine((val) => categoriesSizesMap.has(val)),
  exclude: z
    .preprocess(JsonParse, z.array(z.coerce.number().int().nonnegative()))
    .optional(),
  types: z.preprocess(
    JsonParse,
    z.array(z.enum(["known", "unkown", "undiscovered"]))
  ),
});
