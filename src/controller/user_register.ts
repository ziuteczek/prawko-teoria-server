import userExist from "../db/user_exist";
import createUserDB from "../db/user_register_DB";
import sendVerificationEmail from "../email/verification";
import { userRegisterData } from "../env";

import {
  emailRegex,
  getFailResponse,
  logErrorDEV,
  passwordRegex,
} from "../helpers";

import { NextFunction, Request, Response } from "express";

const userRegister = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, name }: userRegisterData = req.body;

  if (!email || !password || !name) {
    const response = getFailResponse("required-data-not-provided");
    res.status(400).json(response);

    logErrorDEV("Sufficient data not provided");

    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    const response = getFailResponse("email-or-password-wrongly-formated");
    res.status(400).json(response);
    logErrorDEV("Email or password wrongly formated");
    return;
  }

  try {
    if (await userExist(email)) {
      const response = getFailResponse("user-with-given-email-already-exist");
      logErrorDEV("user-with-given-email-already-exist");
      res.status(409).json(response);
      return;
    }

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
