const Joi = require("joi");
const AppError = require("./AppError");

const loginSchema =  Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(3).max(20).required()
})

const signSchema =  Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(3).max(20).required()
})

const signupValidation = (req,res,next)=>{
  const {error} = signSchema.validate(req.body);
  if(error) return next(new AppError(error.message,400,error.details))
  next()
}
const loginValidation = (req,res,next)=>{
  const {error} = loginSchema.validate(req.body);
  if(error) return next(new AppError(error.message,400,error.details))
  next()
}
module.exports = {signupValidation,loginValidation}