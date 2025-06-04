import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_by_email.sql");

const userExist = async (email: string) => {
  return !!(await db.get(query, { $email: email }));
};
export default userExist;
