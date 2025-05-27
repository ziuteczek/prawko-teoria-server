import sqlite3 from "sqlite3";
import dotenv from "dotenv";
import { open } from "sqlite";
import { readFileSync } from "fs";

dotenv.config();

const initQuerySQL = readFileSync(
  `${import.meta.dirname}/sql/init.sql`
).toString();

const db = await open({
  filename: ":memory:",
  driver: sqlite3.Database,
});
await db.exec(initQuerySQL)

if (process.env.MODE === "dev") {
  const dummyDataQuery = readFileSync(`${import.meta.dirname}/sql/dummy.sql`);
  await db.exec(dummyDataQuery.toString());
  console.log(await db.all("SELECT * FROM user"));
}

export default db;
