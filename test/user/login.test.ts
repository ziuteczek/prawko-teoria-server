import { strictEqual } from "assert";
const loginUser = async (email: string, password: string) => {
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
  strictEqual(response.status, 200);
};
export default loginUser;
