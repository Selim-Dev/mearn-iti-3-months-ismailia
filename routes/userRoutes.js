const express = require("express");

const router = express.Router();
const fs = require("fs");
const AppError = require("../utils/AppError");
const path = require("path");
const User = require("../models/user");
router.use("/", (req, res, next) => {
  console.log("request happend at ", Date.now());
  req.test = "mohamed";
  next();
});
// restful api (users) : crud operations // create, read , update, delete
// users

// get users
router.get("/", async (req, res, next) => {
  const users = await User.find({ status: "active" });
  res.send(users);
});
// get user by id
router.get("/:id", async (req, res,next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if(!user) return next(new AppError('user not found',404))
  res.send(user);
});
// create users
router.post("/", async (req, res,next) => {
  // try {
  const { email, password } = req.body;
  if(!email || !password){
    const error = new Error('email and password are required');
    err.status = 'error'
    error.statusCode = 400;
    return next(error)
  }
  // const userCreated = await User.create({email,password});
  const userCreated = new User({ email, password });
  await userCreated.save();
  userCreated.password = undefined;
  res.send(userCreated);
  // } catch (err) {
  //   console.log('err', err)
  //   next(err);
  // }
});
// update users
// put : replace the old document with the new document
// patch: only modifies certain properties inside the document
router.patch("/:id", (req, res) => {});
// delete users
router.delete("/:id", (req, res) => {});

router.use((req, res, next) => {
  console.log(req.data);
});

module.exports = router;
