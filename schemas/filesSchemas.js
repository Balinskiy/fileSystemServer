import Joi from "joi";

export const createFileSchema = Joi.object({
  filename: Joi.string().required(),
  content: Joi.string().required(),
});
