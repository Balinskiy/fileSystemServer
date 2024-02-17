import HttpError from "../helpers/HttpError.js";

export const checkExtension = (req, res, next) => {
  const EXTENSIONS = ["txt", "pdf", "mp4", "doc", "js"];

  const fileName = req.body.filename;
  const check = fileName.split(".");
  const extension = check[check.length - 1];
  const message = `Sorry, the application does not support files with ${extension} extension`;
  const isValidExtension = EXTENSIONS.some((item) => item === extension);
  if (!isValidExtension) {
    next(HttpError(400, message));
  }
  next();
};
