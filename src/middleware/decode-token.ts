import { logErrorDEV, unsignToken } from "../helpers";
import { Request, Response, NextFunction } from "express";

const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    res.redirect(process.env.SITE_URL);
    return;
  }

  try {
    const unsignedTokenData = await unsignToken(token);

    if (typeof unsignedTokenData === "string") {
      throw new TypeError("type of JWT is string");
    }

    if (!unsignedTokenData) {
      throw new Error("JWT data is empty");
    }

    res.locals.userTokenData = unsignedTokenData;
  } catch (err: any) {
    res.clearCookie("token");

    logErrorDEV(err);

    res.redirect(process.env.SITE_URL);
    return;
  }


  next();
};
export default decodeToken;
