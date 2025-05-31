import { Request, Response, NextFunction } from "express";
import { emailRegex, logErrorDEV, passwordRegex, signToken } from "../helpers";
import userLoginDB from "../db/user_login_DB";

const userLogin = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, keepLogin }: userLoginData = req.body;

  if (!email || !password || !keepLogin) {
    res.status(400).send(null);

    logErrorDEV("Sufficient xPPP data not provided");

    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    res.status(400).send(null);

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
    res.status(400).send(null);

    logErrorDEV(err);

    return;
  }

  res.status(200).send(null);
};
export default userLogin;
