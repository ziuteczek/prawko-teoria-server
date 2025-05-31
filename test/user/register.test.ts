import { strictEqual } from "assert";

const registerUser = async (email: string, password: string, name: string) => {
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
  strictEqual(response.status, 201);
};
export default registerUser;
