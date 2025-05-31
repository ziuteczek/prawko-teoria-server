import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_verify.sql");

const userVerificateDB = async (email: string) => {
  await db.run(query, { $email: email });
};
export default userVerificateDB;
