import dotenv from "dotenv";
import { after, describe, it } from "node:test";
import app from "../src/app";

// User tests
import register from "./user/register.test";
import verify from "./user/verify.test";
import login from "./user/login.test";
import { assert } from "node:console";
import { strictEqual } from "node:assert";

const port = 3200;

dotenv.config();

let server: any;

await (async () => {
  return await new Promise((resolve) => {
    server = app.listen(port, resolve);
  });
})();

describe("Authorization & authentication", () => {
  const name = "Stas";
  const email = "elo@gmail.com";
  const password = "EloZel@2ADD31";
  const incorrentPassword = password + "elozelo";
  const unregisteredEmail = "elozelo" + password;
  const emailWronglyFormated1 = "elozelo";
  const emailWronglyFormated2 = "elozelo@gmail";
  const weakPasswords = [
    "stasio",
    "stasiobombasio",
    "STASIOBOMBASIO",
    "2137ELOZELO",
    "Stasiobombasio"
  ];
  

  //Succes
  it("Register", async () => await register(email, password, name));
  it("Verify", async () => await verify(email));
  it("Login", async () => await login(email, password));

  //Fail
  it("Login incorrect email", async () => await login(unregisteredEmail, password, false));
  it("Login incorrect password", async () => await login("g" + email, incorrentPassword, false));
  it("Register user already exist", async () => await register(email, password, name, false));
  it("Register email wrongly foramted", async () => await register(emailWronglyFormated1, password, name, false));
  it("Register email wrongly foramted", async () => await register(emailWronglyFormated2, password, name, false));
  
  weakPasswords.forEach((password,i)=>{
    it(`${i + 1}. Weak password test`, async () => await register(`${i}${email}`, password, name, false));
  });
  it("elo", async () => {await fetch("localhost:3200/dashboard"); strictEqual(1,1)});
});

after(() => {
  server.close();
});
