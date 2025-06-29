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
import userLoginSchema from "../validation/searchParams/user_login_schema";

const userLogin = async (req: Request, res: Response, _: NextFunction) => {
  const { data, success, error } = await userLoginSchema.safeParseAsync(
    req.body
  );

  if (!success) {
    const response = getFailResponse("required-data-not-provided");
    res.status(400).json(response);

    logErrorDEV("Sufficient data not provided");

    return;
  }

  const { email, password, keepLogin }: userLoginData = data;

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
