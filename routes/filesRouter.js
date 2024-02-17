import express from "express";
import { createFile } from "../controllers/filesController";

const filesRouter = express.Router();

filesRouter.post("/", createFile);

export default filesRouter;
