import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import db from "./db/connection";
import { signToken } from "./helpers";

db;

dotenv.config();

const server = express();
const router = express.Router();
const port = process.env.PORT;

server.use(morgan("dev"));
server.use(cookieParser());

server.use(async (req, res, next) => {
  await signToken({g: "5"})
  next();
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
