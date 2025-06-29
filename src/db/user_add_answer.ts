import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_add_answer.sql");
const addAnswer = async (
  userID: number,
  questionID: number,
  answer: string
) => {
  await db.run(query, {
    $user_id: userID,
    $question_id: questionID,
    $picked_option: answer,
  });
};
export default addAnswer;
