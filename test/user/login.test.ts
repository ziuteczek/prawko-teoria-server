import { notStrictEqual, strictEqual } from "assert";
const loginUser = async (
  email: string,
  password: string,
  positive: boolean = true
) => {
  const response = await fetch(process.env.SERVER_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email,
      password,
      keepLogin: "on",
    }),
  });
  if (positive) {
    strictEqual(response.status, 200);
  } else {
    notStrictEqual(response.status, 200);
  }
};
export default loginUser;
