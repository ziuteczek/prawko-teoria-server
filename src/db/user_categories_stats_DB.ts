import db from "./connection";
import getQuery from "./queries_collection";
import { categoriesSizesMap } from "./questions_categories";

const query = getQuery("user_categories_stats.sql");

const userDashboardDB = async (id: number) => {
  const userStats: { category: string; known: number; unkown: number }[] =
    await db.all(query, { $id: id });

  return userStats.map((userStat) => {
    const categorySize = categoriesSizesMap.get(userStat.category);
    if (typeof categorySize === "undefined") {
      throw new Error("CategoryName is undefined");
    }
    return { ...userStat, size: categorySize };
  });
};
export default userDashboardDB;
