import nodemailer from "nodemailer";
import {emails} from "../../test/data.test"
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dymnystan@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});
export const sendMail = async (reciver: string, subject: string, text: string) => {
  if (process.env.MODE === "test") {
    emails[reciver] = text;
  }
  return await transporter.sendMail({
    from: "Prawko-Teoria dymnystan@gmail.com",
    to: reciver,
    subject: subject,
    text: text,
  });
};
