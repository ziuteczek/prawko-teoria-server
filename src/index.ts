import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import decodeToken from "./middleware/decode-token";
import userRegister from "./controller/user_register";
import userLogin from "./controller/user_login";

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 3200;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", userLogin);
app.post("/register", userRegister);

app.use(decodeToken);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
