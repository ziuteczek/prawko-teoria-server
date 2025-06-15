import getUndiscoveredQuestions from "db/user_questions_DB";
import { Request, Response, NextFunction } from "express";
import { logErrorDEV } from "helpers";
import { categoriesSizesMap } from "db/questions_categories";
const userQuestions = async (req: Request, res: Response, _: NextFunction) => {
  const category = req.query.category;

  if (typeof category != "string") {
    logErrorDEV("Wrong type of userQuestions request params");
    res.status(400).send(null);
    return;
  }

  if (!categoriesSizesMap.has(category)) {
    logErrorDEV("Given category doesn't exist");
    res.status(400).send(null);
    return;
  }

  const questions = {
    undiscovered: await getUndiscoveredQuestions(9, category),
  };
  res.status(200).json(questions);
};
export default userQuestions;
