import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_undiscovered_questions.sql");
function getUserQuestionsDB(
  id: number,
  category: string,
  quantity: number,
  exclude?: number[]
) {
  if (!exclude) {
    exclude = [];
  }

  const queryFormated = query.replace("$exclude", exclude.join(","));

  return db.all(queryFormated, {
    $id: id,
    $category: category,
    $quantity: quantity,
  });
}
export default getUserQuestionsDB;
