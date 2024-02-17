import express from "express";
import { createFile, getFile } from "../controllers/filesController.js";
import validateBody from "../helpers/validateBody.js";
import { createFileSchema } from "../schemas/filesSchemas.js";
import { checkExtension } from "../middleWares/checkExtension.js";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

filesRouter.get("/", getFile);

export default filesRouter;
