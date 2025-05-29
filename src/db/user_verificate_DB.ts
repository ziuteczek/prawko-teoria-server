import db from "./connection";

const userVerificateDB = async (email: string) => {
  await db.run(`UPDATE user SET verification = TRUE WHERE email = '${email}'`);
};
export default userVerificateDB;
