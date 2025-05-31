import { strictEqual } from "assert";
import { emails } from "../data.test";
const verifyUser = async (email: string) => {
  const verifyLink = emails[email];
  const verifyRequest = await fetch(verifyLink, { redirect: "manual" });
  const redirectLink = verifyRequest.headers?.get("location");
  const isSucces = redirectLink?.includes("verification=true");
  strictEqual(isSucces, true);
};
export default verifyUser;
