import { hash } from "../helpers";
import db from "./connection";
import getQuery from "./queries_collection";

const query = getQuery("user_register.sql");

async function createUserDB(email: string, name: string, password: string) {
  const passwordHashed = await hash(password);
  await db.run(query, {
    $email: email,
    $name: name,
    $passwordHashed: passwordHashed,
  });
}
export default createUserDB;
