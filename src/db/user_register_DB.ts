import { hash } from "../helpers";
import db from "./connection";

async function createUserDB(email: string, name: string, password: string) {
  const passwordHashed = await hash(password);
  await db.run(
    `INSERT INTO user (email,name,password) VALUES ('${email}','${name}','${passwordHashed}')`
  );
}
export default createUserDB;
