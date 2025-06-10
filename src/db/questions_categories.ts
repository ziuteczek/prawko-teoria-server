import db from "./connection";
import getQuery from "./queries_collection";

const categoriesSizesQuery = getQuery("categories_questions_quantity.sql");
const categoriesSizesObj: { name: string; quantity: number }[] = await db.all(
  categoriesSizesQuery
);
const categoriesSizesMap: Map<string, number> = new Map();

categoriesSizesObj.forEach((categorySize) =>
  categoriesSizesMap.set(categorySize.name, categorySize.quantity)
);

const categoriesNamesList = categoriesSizesObj.map(
  (categoryObj) => categoryObj.name
);

export { categoriesSizesObj, categoriesSizesMap, categoriesNamesList };
