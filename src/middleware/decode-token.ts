import { NextFunction } from "express";
import { unsignToken } from "../helpers";

const decodeToken = async (req: any, res: any, next: NextFunction) => {
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
  } catch (err) {
    console.error("Failed to unsign token");
    res.clearCookie("token");
    if (process.env.MODE === "dev") {
      console.error(err);
    }
    res.redirect(process.env.SITE_URL);
    return;
  }

  next();
};
export default decodeToken;
