const express = require('express');

const router = express.Router();

//todos

// get todos
router.get('/todos',(req,res)=>{
	// get all todos from database
	res.send('todos')
})
// get user by id
router.get('/todos/:id',(req,res)=>{
	const {id}= req.params;
	// get user with id 
	res.send('todos')
})
// create todos
router.post('/todos',(req,res)=>{
	// {email:"daflk",password:"sdfdsf"}
	// create new user 
	console.log('data',req.body)
	res.send('user created');
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