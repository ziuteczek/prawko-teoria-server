import dotenv from "dotenv";
import { after, describe, it } from "node:test";
import app from "../src/app";
import registerUser from "./user/register.test";
import verifyUser from "./user/verify.test";
import loginUser from "./user/login.test";

const port = 3200;

dotenv.config();

let server: any;

await (async () => {
  return await new Promise((resolve) => {
    server = app.listen(port, resolve);
  });
})();

describe("Authorization & authentication", () => {
  const email = "elo@gmail.com";
  const password = "EloZel@2ADD31";
  const name = "Stas";
  it("Register", async () => await registerUser(email, password, name));
  it("Verify", async () => await verifyUser(email));
  it("Login", async () => await loginUser(email, password));
});

after(() => {
  server.close();
});
