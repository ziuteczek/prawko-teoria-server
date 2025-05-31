import { readdirSync, readFileSync } from "fs";
import { logErrorDEV } from "../helpers";

const queriesPath = import.meta.dirname + "/sql/";

const queries = new Map<string, string>();
try {
  const queriesFiles = readdirSync(queriesPath);
  queriesFiles.forEach((fileName) => {
    const query = readFileSync(queriesPath + fileName).toString();

    if (!query) {
      throw new Error(`Can't read query ${fileName}`);
    }

    queries.set(fileName, query);
  });
} catch (err: any) {
  logErrorDEV(err);
  process.exit(1);
}
const getQuery = (queryName: string) => {
  const query = queries.get(queryName);
  if (!query) {
    throw new Error(`Query ${queryName} doesn't exist`);
  }
  return query;
};
export default getQuery;
