import nodemailer from "nodemailer";
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
  return await transporter.sendMail({
    from: "Prawko-Teoria dymnystan@gmail.com",
    to: reciver,
    subject: subject,
    text: text,
  });
};
