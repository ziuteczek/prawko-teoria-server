/**
 * Handles user registration requests.
 *
 * This controller validates the incoming request body using the `userRegisterSchema`.
 * If validation fails, it responds with a 400 status and an error message.
 * If the user already exists (checked via `userExist`), it responds with a 409 status.
 * Otherwise, it creates a new user in the database and sends a verification email.
 * Any errors during user creation or email sending result in a 400 status response.
 *
 * @param req - Express request object containing user registration data in the body.
 * @param res - Express response object used to send responses to the client.
 * @param _ - Express next function (unused).
 * @returns Sends a JSON response indicating success or failure of the registration process.
 */
import userExist from "../db/user_exist";
import createUserDB from "../db/user_register_DB";
import sendVerificationEmail from "../email/verification";
import { userRegisterData } from "../env";

import { getFailResponse, logErrorDEV } from "../helpers";

import { NextFunction, Request, Response } from "express";

import userRegisterSchema from "../validation/searchParams/user_register_validation";

const userRegister = async (req: Request, res: Response, _: NextFunction) => {
  const { data, success, error } = await userRegisterSchema.safeParseAsync(
    req.body
  );

  if (!success) {
    const response = getFailResponse("required-data-not-provided");
    res.status(400).json(response);

    logErrorDEV(error);

    return;
  }

  const { email, password, name }: userRegisterData = data;

  try {

    await createUserDB(email, name, password);
    await sendVerificationEmail(email);
  } catch (err: any) {
    const response = getFailResponse("error-while-creating-new-user");

    res.status(400).json(response);
    logErrorDEV(err);
    return;
  }

  res.status(201).json({
    status: "succes",
  });
};
export default userRegister;
