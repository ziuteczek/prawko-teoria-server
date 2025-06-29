import { z } from "zod/v4";
export default z.object({
  questionID: z.coerce.number().nonnegative(),
  answer: z.string(),
});
