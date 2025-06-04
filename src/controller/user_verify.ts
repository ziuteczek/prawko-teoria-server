import { Request, Response, NextFunction } from "express";
import { logErrorDEV, unsignToken } from "../helpers";
import userVerificateDB from "../db/user_verificate_DB";
import { userTokenData } from "../env";

const failLink = `${process.env.SITE_URL}/?verification=false`;
const succesLink = `${process.env.SITE_URL}/?verification=true`;

const userVerify = async (req: Request, res: Response, _: NextFunction) => {
  const { token } = req.query;

  if (typeof token !== "string") {
    res.redirect(failLink);
    logErrorDEV(`Token is invalid type: ${typeof token}`);
    return;
  }

  const userDataPayload = await unsignToken(token);

  if (typeof userDataPayload === "string") {
    res.redirect(failLink);
    logErrorDEV(`Decoded token is invalid type: ${typeof userDataPayload}`);
    return;
  }

  const {email,name,} = userDataPayload

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

  res.redirect(301,succesLink);
};

export default userVerify;
