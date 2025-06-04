import { notStrictEqual, strictEqual } from "assert";
import  assert  from "node:assert";

const registerUser = async (
  email: string,
  password: string,
  name: string,
  positive: boolean = true
) => {
  const response = await fetch(process.env.SERVER_URL + "/register", {
    method: "POST",
    body: new URLSearchParams({
      email,
      password,
      name,
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (positive) {
    strictEqual(response.status, 201);
    assert
  } else {
    notStrictEqual(response.status, 201);
  }
};
export default registerUser;
