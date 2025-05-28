import db from "./connection";

const userExist = async (email?: string, id?: number) => {
  if (!email && !id) {
    throw new Error("No parameteter given");
  }

  let condition;
  if (email) {
    condition = `email = '${email}'`;
  } else {
    condition = `id = '${id}'`;
  }

  return !!await db.get(`SELECT * FROM user WHERE ${condition}`);
};
export default userExist;
