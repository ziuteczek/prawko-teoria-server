import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import decodeToken from "./middleware/decode-token";
import userRegister from "./controller/user_register";
import userLogin from "./controller/user_login";
import userVerify from "./controller/user_verify";
import userDashboard from "controller/user_dashboard";
import userDashboardDB from "db/user_categories_stats_DB";

dotenv.config();

const app = express();
const router = express.Router();

if (process.env.MODE === "dev") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", userLogin);
app.post("/register", userRegister);
app.get("/verify", userVerify);

app.use(decodeToken);

app.get("/dashboard", userDashboard);

export default app;
