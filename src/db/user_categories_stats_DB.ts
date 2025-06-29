import db from "./connection";
import getQuery from "./queries_collection";
import { categoriesSizesObj } from "./questions_categories";

const query = getQuery("user_categories_stats.sql");

const getUserCategoriesStats = async (id: number) => {
  const userStats: {
    category: string;
    known: number;
    unknown: number;
    undiscovered: number;
  }[] = await db.all(query, { $id: id });

  console.log(userStats);

  return categoriesSizesObj.map((categoryObj) => {
    const stats = userStats.find(
      (stats) => stats.category === categoryObj.name
    );

    return {
      category: categoryObj.name,
      known: stats?.known || 0,
      unknown: stats?.unknown || 0,
      size: categoryObj.quantity,
    };
  });
};
export default getUserCategoriesStats;
