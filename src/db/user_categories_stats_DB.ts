import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_categories_stats.sql");

const userDashboardDB = async (id: number) => {
  return await db.all(query, { $id: id });
};
export default userDashboardDB;
