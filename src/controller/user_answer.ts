import { NextFunction, Request, Response } from "express";
import answerSchema from "../validation/searchParams/user_answer_validation";
import { logErrorDEV } from "helpers";
import addAnswer from "db/user_add_answer";

const userAnswer = async (req: Request, res: Response, _: NextFunction) => {
  const { data, error, success } = answerSchema.safeParse(req.query);
  if (!success) {
    logErrorDEV(error);
    res.status(400).json(error);
    return;
  }

  const { questionID, answer } = data;

  await addAnswer(9, questionID, answer);

  res.status(201).send(null);
};
export default userAnswer;
