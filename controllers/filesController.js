import fs from "fs/promises";
import path from "path";
import HttpError from "../helpers/HttpError.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const FOLDER_PATH = path.resolve("./files");

export const createFile = async (req, res, next) => {
  const { content, filename } = req.body;
  const filesPath = path.resolve("./files", filename);

  try {
    await fs.writeFile(filesPath, content);
    res.status(201).json({ message: "File successfully created" });
  } catch (e) {
    console.log(e);
  }
};

export const getFiles = async (req, res, next) => {
  try {
    const folderContent = await fs.readdir(FOLDER_PATH);
    if (folderContent.length === 0) {
      throw HttpError(404, "Folder is empty");
    }
    res.json(folderContent);
  } catch (e) {
    next(e);
  }
};

export const getFile = async (req, res, next) => {
  try {
    const folderContent = await fs.readdir(FOLDER_PATH);

    if (!folderContent.find(item => item === req.params.fileName)) {
      throw HttpError(404, "The file doen't find");
    }

    const filePath = path.resolve("./files", req.params.fileName);

    const content = await fs.readFile(filePath, "utf-8");
    res.json({ content });
  } catch (error) {
    next(error);
  }
};
