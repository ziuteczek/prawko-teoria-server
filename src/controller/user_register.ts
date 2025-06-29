import userExist from "../db/user_exist";
import createUserDB from "../db/user_register_DB";
import sendVerificationEmail from "../email/verification";
import { userRegisterData } from "../env";

import { getFailResponse, logErrorDEV } from "../helpers";

import { NextFunction, Request, Response } from "express";

import userRegisterSchema from "../validation/searchParams/user_register_validation";

const userRegister = async (req: Request, res: Response, _: NextFunction) => {
  const { data, success, error } = await userRegisterSchema.safeParseAsync(
    req.body
  );

  if (!success) {
    const response = getFailResponse("required-data-not-provided");
    res.status(400).json(response);

    logErrorDEV("Sufficient data not provided");

    return;
  }

  const { email, password, name }: userRegisterData = data;

  try {
    if (await userExist(email)) {
      const response = getFailResponse("user-with-given-email-already-exist");
      logErrorDEV("user-with-given-email-already-exist");
      res.status(409).json(response);
      return;
    }

    await createUserDB(email, name, password);
    await sendVerificationEmail(email);
  } catch (err: any) {
    const response = getFailResponse("error-while-creating-new-user");

    res.status(400).json(response);
    logErrorDEV(err);
    return;
  }

  res.status(201).json({
    status: "succes",
  });
};
export default userRegister;
