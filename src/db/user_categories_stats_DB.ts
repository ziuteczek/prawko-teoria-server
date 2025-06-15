import db from "./connection";
import getQuery from "./queries_collection";
import { categoriesSizesObj } from "./questions_categories";

const query = getQuery("user_categories_stats.sql");

const getUserCategoriesStats = async (id: number) => {
  console.log(id);
  const userStats: {
    category: string;
    known: number;
    unkown: number;
    undiscovered: number;
  }[] = await db.all(query, { $id: id });

  return categoriesSizesObj.map((categoryObj) => {
    const stats = userStats.find(
      (stats) => stats.category === categoryObj.name
    );

    return {
      category: categoryObj.name,
      known: stats?.known || 0,
      unkown: stats?.known || 0,
      size: categoryObj.quantity,
    };
  });
};
export default getUserCategoriesStats;
