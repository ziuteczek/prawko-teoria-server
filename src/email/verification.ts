import { signToken } from "../helpers";
import { sendMail } from "./connection";

async function sendVerificationEmail(email: string) {
  const token = await signToken(email);
  await sendMail(email, "Weryfikacja Prawko-Teoria", token);
  
}

export default sendVerificationEmail;
