import express, { application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//Declaring express app
const app = express();

//CORS integration
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

//middleware stuff
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router import statement's



//Router Declaration statement's

export { app };
