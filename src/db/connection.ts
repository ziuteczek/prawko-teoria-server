import sqlite3 from "sqlite3";
import dotenv from "dotenv";
import { open } from "sqlite";
import getQuery from "./queries_collection";
import { readFileSync } from "fs";
import { QuestionJSON } from "../env";

dotenv.config();

const db = await open({
  filename: ":memory:",
  driver: sqlite3.Database,
});

const initQuery = getQuery("init.sql");

const questions: QuestionJSON[] = JSON.parse(
  readFileSync(`${import.meta.dirname}/questions.json`).toString()
);

await db.exec(initQuery);

const promises = new Array(questions.length);
const createQuestionQuery = getQuery("question_insert.sql");
questions.forEach((question, i) => {
  const questionPromise = db.run(createQuestionQuery, {
    $id: question["Numer pytania"],
    $content: question["Pytanie"],
    $correct_answer: question["Poprawna odp"],
    $category: question["Kategoria"],
    $media: question["Media"],
    $media_id: question["MediaID"],
  });
  promises[i] = questionPromise;
});

if (process.env.MODE === "dev") {
  const dummyDataQuery = getQuery("dummy.sql");
  promises.push(db.exec(dummyDataQuery));
}

await Promise.all(promises);

export default db;
