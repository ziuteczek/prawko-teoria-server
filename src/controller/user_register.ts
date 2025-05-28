import userExist from "../db/user_exist";
import createUserDB from "../db/user_register_DB";
import sendVerificationEmail from "../email/verification";
import { emailRegex, passwordRegex } from "../helpers";

import { NextFunction, Request, Response } from "express";

const userRegister = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, name }: userRegisterData = req.body;

  if (!email || !password || !name) {
    res.status(400).send(null);
    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    res.status(400).send(null);
    return;
  }

  if (await userExist(email)) {
    res.status(409).send(null);
    return;
  }

  try {
    await createUserDB(email, name, password);
    await sendVerificationEmail(email);
  } catch (err) {
    res.status(400).send(null);
    return;
  }
  res.status(201).send(null);
};
export default userRegister;
