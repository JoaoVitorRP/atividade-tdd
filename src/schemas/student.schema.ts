import Joi from "joi";

export const studentSchema = Joi.object({
  name: Joi.string().required(),
});
