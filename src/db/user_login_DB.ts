import { error } from "console";
import { verifyHash } from "../helpers";
import db from "./connection";
import argon2 from "argon2";

const userLoginDB = async (
  email: string,
  password: string,
  keepLogin: boolean
) => {
  const userData = (await db.get(
    `SELECT * FROM user WHERE email = '${email}' LIMIT 1`
  )) as userDataDB | undefined;

  if (!userData) {
    throw new Error(`user ${email} doesn't exist`);
  }

  const passwordHashed = userData.password;

  if (!verifyHash(passwordHashed, password)) {
    throw new Error("password incorrect");
  }

  return userData;
};
export default userLoginDB;
