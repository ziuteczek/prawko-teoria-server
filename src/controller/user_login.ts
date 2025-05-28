import { Request, Response, NextFunction } from "express";
import { emailRegex, passwordRegex, signToken } from "../helpers";
import userLoginDB from "../db/user_login_DB";

const userLogin = async (req: Request, res: Response, _: NextFunction) => {
  const { email, password, keepLogin }: userLoginData = req.body;

  if (!email || !password || !keepLogin) {
    res.status(400).send(null);
    return;
  }

  if (!emailRegex.test(email) || !passwordRegex.test(password)) {
    res.status(400).send(null);
    return;
  }

  const weekDurationMS = 604_800_000;
  try {
    const userData = await userLoginDB(email, password, keepLogin === "on");
    {
      const { id, email, name } = userData;
      const token = await signToken({ id, email, name });
      res.cookie("token", token, { maxAge: weekDurationMS });
    }
  } catch (err) {
    res.status(400).send(null);
    return;
  }

  res.status(200).send(null);
};
export default userLogin;
