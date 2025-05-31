import sqlite3 from "sqlite3";
import dotenv from "dotenv";
import { open } from "sqlite";
import getQuery from "./queries_collection";

dotenv.config();

const db = await open({
  filename: ":memory:",
  driver: sqlite3.Database,
});

const initQuery = getQuery("init.sql");

if (!initQuery) {
  throw new Error("Query init is empty");
}

await db.exec(initQuery);

if (process.env.MODE === "dev") {
  const dummyDataQuery = getQuery("dummy.sql");
  await db.exec(dummyDataQuery);
}

export default db;
