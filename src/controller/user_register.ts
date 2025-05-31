import userExist from "../db/user_exist";
import createUserDB from "../db/user_register_DB";
import sendVerificationEmail from "../email/verification";
import { emailRegex, logErrorDEV, passwordRegex } from "../helpers";

import { NextFunction, Request, Response } from "express";

const userRegister = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, name }: userRegisterData = req.body;

  if (!email || !password || !name) {
    res.status(400).send(null);

    logErrorDEV("Sufficient xDDD data not provided");

    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    res.status(400).send(null);
    logErrorDEV("Email or password wrongly formated");
    return;
  }

  try {
    if (await userExist(email)) {
      res.status(409).send(null);
      logErrorDEV("user already exist");
      return;
    }
  } catch (err) {
    res.status(500).send(null);
    logErrorDEV("Error while searching DB");
    return;
  }

  try {
    await createUserDB(email, name, password);
    await sendVerificationEmail(email);
  } catch (err: any) {
    res.status(400).send(null);
    logErrorDEV(err);
    return;
  }

  res.status(201).send(null);
};
export default userRegister;
