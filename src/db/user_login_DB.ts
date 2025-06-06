import { userDataDB } from "env";
import {  verifyHash } from "../helpers";

import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_by_email.sql");

const userLoginDB = async (email: string, password: string) => {
  const userData = (await db.get(query, {
    $email: email,
  })) as userDataDB | undefined;

  if (!userData) {
    throw new Error(`user ${email} doesn't exist`);
  }

  if (!userData.verification) {
    throw new Error("user is not verified");
  }

  const passwordHashed = userData.password;

  if (!(await verifyHash(passwordHashed, password))) {
    throw new Error("password incorrect");
  }

  return userData;
};
export default userLoginDB;
