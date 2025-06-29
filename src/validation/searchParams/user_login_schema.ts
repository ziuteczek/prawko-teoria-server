import userExist from "db/user_exist";
import { passwordRegex } from "helpers";
import { email } from "zod/v4";
import { z } from "zod/v4";

export default z.object({
  email: z.email().refine(async (email) => await userExist(email)),
  password: z.string().regex(passwordRegex),
  keepLogin: z
    .literal("on")
    .optional()
    .transform((val) => val === "on"),
});
