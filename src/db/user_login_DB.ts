import { verifyHash } from "../helpers";
import db from "./connection";

const userLoginDB = async (email: string, password: string) => {
  const userData = (await db.get(
    `SELECT * FROM user WHERE email = '${email}' LIMIT 1`
  )) as userDataDB | undefined;

  if (!userData) {
    throw new Error(`user ${email} doesn't exist`);
  }

  const passwordHashed = userData.password;

  if (!(await verifyHash(passwordHashed, password))) {
    throw new Error("password incorrect");
  }

  return userData;
};
export default userLoginDB;
