import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import db from "./db/connection";
import cors from "cors";
import decodeToken from "./middleware/decode-token";

db;

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 3200;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.get("/login",(req,res,next)=>{
  const data = req.body;
  
  next();
});

app.use(decodeToken);


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
