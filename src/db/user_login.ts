import db from "./connection";
import argon2 from "argon2";

const userLogin = async (userLoginData: userLoginData) => {
  const { email, password, keepLogin } = userLoginData;
  const userData = await db.get(`SELECT password FROM user WHERE email = '${email}' LIMIT 1`);
};
