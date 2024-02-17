import express from "express";
import { createFile } from "../controllers/filesController";
import { validateBody } from "../helpers/validateBody";
import { createFileSchema } from "../schemas/filesSchemas";
import { checkExtension } from "../middleWares/checkExtension";

const filesRouter = express.Router();

filesRouter.post(
  "/",
  validateBody(createFileSchema),
  checkExtension,
  createFile
);

export default filesRouter;
