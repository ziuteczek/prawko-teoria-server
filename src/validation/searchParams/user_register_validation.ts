import userExist from "db/user_exist";
import { passwordRegex } from "helpers";
import { z } from "zod/v4";

import messages from "../../lang/pl.json";

export default z.object({
  email: z
    .email()
    .refine(async (email) => !(await userExist(email)), {
      message: messages.auth["user-with-given-email-already-exist"],
    }),
  password: z.string().regex(passwordRegex),
  name: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9 _ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/),
});
