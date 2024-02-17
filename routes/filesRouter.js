import express from "express";
import {
  createFile,
  getFiles,
  getFile,
} from "../controllers/filesController.js";
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

filesRouter.get("/", getFiles);

filesRouter.get("/:fileName", getFile);

export default filesRouter;
