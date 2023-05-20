const express = require("express");

const router = express.Router();
const fs = require("fs");
const AppError = require("../utils/AppError");
const path = require("path");
const User = require("../models/user");
const {signup,login,getSingleUsaer,getAllUsers} = require('../controllers/authenticationController');
const Joi = require("joi");
const { loginValidation, signupValidation } = require("../utils/auhenticationSchema");



// restful api (users) : crud operations // create, read , update, delete
// users

// get users
router.get("/", getAllUsers);
// get user by id
router.get("/:id",getSingleUsaer);
// registration users

router.post("/",signupValidation,signup);
router.post("/login",loginValidation,login)
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
