import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_get_undiscovered_questions.sql");
function getUserQuestionsDB(id: number, category: string, quantity: number,exclude?:number[]) {
  return db.all(query, { $id: id, $category: category, $quantity: quantity, $exclude: exclude?.join(',')});
}
export default getUserQuestionsDB;
