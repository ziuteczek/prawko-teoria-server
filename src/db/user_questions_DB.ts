import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_undiscovered_questions.sql");
function getUserQuestionsDB(id: number, category: string) {
  return db.all(query, { $id: id, $category: category });
}
export default getUserQuestionsDB;
