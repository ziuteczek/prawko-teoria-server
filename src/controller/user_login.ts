import { Request, Response, NextFunction } from "express";
import {
  emailRegex,
  getFailResponse,
  logErrorDEV,
  passwordRegex,
  signToken,
} from "../helpers";
import userLoginDB from "../db/user_login_DB";
import { userLoginData } from "../env";

const userLogin = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, keepLogin }: userLoginData = req.body;

  if (!email || !password || !keepLogin) {
    const response = getFailResponse("required-data-not-provided");
    res.status(400).json(response);

    logErrorDEV("Sufficient data not provided");

    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    const response = getFailResponse("email-or-password-wrongly-formated");
    res.status(400).json(response);

    logErrorDEV("Email or parrword wrongly formated");

    return;
  }
  const weekDurationMS = 604_800_000;

  try {
    const userData = await userLoginDB(email, password);

    const { id, name } = userData;
    const token = await signToken({ id, email, name });

    res.cookie("token", token, { maxAge: weekDurationMS });
  } catch (err: any) {
    const response = getFailResponse("error-while-searching-user-database");
    res.status(400).json(response);

    logErrorDEV(err);

    return;
  }

  res.status(200).send({
    status: "succes",
  });
};
export default userLogin;
