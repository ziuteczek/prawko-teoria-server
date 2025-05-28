import { NextFunction } from "express";
import { unsignToken } from "../helpers";

const decodeToken = async (req: any, res: any, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    // res.redirect(process.env.SITE_URL);
    // return;
  }

  try {
    const usignedTokenData = await unsignToken(token);
    res.locals.userTokenData = usignedTokenData;
  } catch (err) {
    console.error("Failed to unsign token");
    res.clearCookie("token");
    // res.redirect(process.env.SITE_URL);
  }

  next();
};
export default decodeToken;
