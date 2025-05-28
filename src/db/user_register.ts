import db from "./connection";

async function createUser(userData:userRegisterData)
{
    const {email,name,password} = userData;
    await db.run(`INSERT INTO user (email,name,password) VALUES ('${email}','${name}','${password}')`);
    
}
export default createUser