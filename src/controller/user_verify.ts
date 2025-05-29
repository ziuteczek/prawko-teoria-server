import { Request, Response, NextFunction } from "express";
import { logErrorDEV, unsignToken } from "../helpers";
import userVerificateDB from "../db/user_verificate_DB";

const failLink = `${process.env.SERVER_URL}/?verification=false`;
const succesLink = `${process.env.SERVER_URL}/?verification=true`;

const userVerify = async (req: Request, res: Response, _: NextFunction) => {
  const { token } = req.query;

  if (typeof token !== "string") {
    res.redirect(failLink);
    logErrorDEV(`Token is invalid type: ${typeof token}`);
    return;
  }

  const userData = await unsignToken(token);

  if (typeof userData === "string") {
    res.redirect(failLink);
    logErrorDEV(`Decoded token is invalid type: ${typeof userData}`);
    return;
  }

  const email: string | undefined = userData.email;

  if (!email) {
    res.redirect(failLink);
    logErrorDEV(`User email is not defined`);
    return;
  }

  try {
    await userVerificateDB(email);
  } catch (err: any) {
    res.redirect(failLink);
    logErrorDEV(err);
    return;
  }

  res.redirect(succesLink);
};

export default userVerify;
