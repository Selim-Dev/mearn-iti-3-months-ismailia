const bcrypt = require('bcrypt');
const User = require('../models/user');
const AppError = require('../utils/AppError');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const getAllUsers = async (req, res, next) => {
  const users = await User.find({ status: "active" });
  res.send(users);
}
const signup =  async (req, res,next) => {
  const { email, password } = req.body;
  const userCreated = new User({ email, password });
  await userCreated.save();
  userCreated.password = undefined;
  res.send(userCreated);
}

const login = async (req,res,next )=>{
	
	const {email,password} = req.body;
	const user = await User.findOne({email}).select('+password');
	if(!user) return next(new AppError('invalid credentials',404))
	const isMatch = await user.checkPassword(password);
	if(!isMatch) return next(new AppError('invalid credentials',404))
  user.password = undefined;
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
  console.log(token)
	res.send({token,user})
}
const getSingleUsaer =  async (req, res,next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if(!user) return next(new AppError('user not found',404))
  res.send(user);
}
updateUser = async (req,res,next)=>{
  const user = user.findOne({});
  user.email = 'ahmed'
  user.password = 'hamada'
  await user.save()
}

module.exports = {signup,login,getSingleUsaer,getAllUsers}