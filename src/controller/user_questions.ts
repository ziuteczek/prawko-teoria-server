import getUndiscoveredQuestions from "db/user_questions_DB";
import { Request, Response, NextFunction } from "express";
import { JsonParse, logErrorDEV } from "helpers";
import { userQuestionsSchema } from "validation/user_questions_validation";
const userQuestions = async (req: Request, res: Response, _: NextFunction) => {
  const { data, error, success } = userQuestionsSchema.safeParse(req.query);

  if (!success) {
    logErrorDEV(error);
    res.status(400).json(error);
    return;
  }

  const { limit, category, exclude, types } = data;

  const questions = await getUndiscoveredQuestions(9, category, limit,exclude);

  res.status(200).json(questions);
};
export default userQuestions;
