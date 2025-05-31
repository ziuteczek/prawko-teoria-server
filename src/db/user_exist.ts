import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_condition.sql");

const userExist = async (email?: string, id?: number) => {
  if (!email && !id) {
    throw new Error("No parameteter given");
  }

  let condition;
  if (email) {
    condition = `email = '${email}'`;
  } else {
    condition = `id = '${id}'`;
  }

  return !!(await db.get(query, { $condition: condition }));
};
export default userExist;
