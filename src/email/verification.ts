import { signToken } from "../helpers";
import { sendMail } from "./connection";

async function sendVerificationEmail(email: string) {
  const token = await signToken({ email });
  const tokenLink = `${process.env.SERVER_URL}/verify?token=${token}`;
  await sendMail(email, "Weryfikacja Prawko-Teoria", tokenLink);
}

export default sendVerificationEmail;
