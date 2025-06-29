/**
 * Zod schema for validating user registration parameters.
 *
 * Fields:
 * - `email`: Validates that the value is a valid email address and that the user does not already exist in the database.
 *   - Uses an asynchronous refinement to check for existing users.
 *   - Returns a localized error message if the email is already taken.
 * - `password`: Validates that the password matches the required regex pattern.
 * - `name`: Validates that the name is between 3 and 20 characters, and only contains allowed characters (letters, numbers, spaces, and specific Polish characters).
 */
import userExist from "db/user_exist";
import { passwordRegex } from "helpers";
import { z } from "zod/v4";

import messages from "../../lang/pl.json";


export default z.object({
  email: z.email().refine(async (email) => !(await userExist(email)), {
    message: messages.auth["user-with-given-email-already-exist"],
  }),
  password: z.string().regex(passwordRegex),
  name: z
    .string()
    .min(3)
    .max(20)
    .regex(/^[a-zA-Z0-9 _ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/),
});
