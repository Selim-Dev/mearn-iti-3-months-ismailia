const express = require('express');
const jwt =require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');
const Todo = require('../models/todo');
//todos

// get todos
router.get('/',verifyToken,async(req,res)=>{
	// get all todos from database
	const todos = await Todo.find().populate({
		path:'user',
		select:'username email'
		
	});
	res.send({todos})
})
// get user by id
router.get('/todos/:id',(req,res)=>{
	const {id}= req.params;
	// get user with id 
	res.send('todos')
})
// create todos
router.post('/',verifyToken,async(req,res)=>{
	const {title} = req.body;
	const todoCreated = new Todo({title,user:req.user._id});
	await todoCreated.save();
	res.send(todoCreated)
})
// update todos
// put : replace the old document with the new document
// patch: only modifies certain properties inside the document
router.patch('/todos/:id',(req,res)=>{
	const {id}= req.params;
	// update user with id
	// 1, {username:'ahmed',age:15}
	res.send('user updated')
})
// delete todos
router.delete('/todos/:id',(req,res)=>{
	const {id}= req.params;
	// delete user with id
	// 1, {username:'ahmed',age:15}
	res.send('user deleted')
})

module.exports = router;