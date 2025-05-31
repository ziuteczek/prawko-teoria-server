import { notStrictEqual, strictEqual } from "assert";
import { emails } from "../data.test";
const verifyUser = async (email: string, positive: boolean = true) => {
  const verifyLink = emails[email];
  const verifyRequest = await fetch(verifyLink, { redirect: "manual" });
  const redirectLink = verifyRequest.headers?.get("location");
  const isSucces = redirectLink?.includes("verification=true");
  if (positive) {
    strictEqual(isSucces, true);
  } else {
    notStrictEqual(isSucces, true);
  }
};
export default verifyUser;
