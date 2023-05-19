const express = require('express')
require('express-async-errors')
const app = express()
const port = 3000
const path = require('path');
const morgan = require('morgan');
const { get } = require('http');
const mongoose = require('mongoose');
require('./db')

const userRoutes = require('./routes/userRoutes')
const todosRoutes = require('./routes/todosRoutes')
// middleware

// app.use(express.static()) // used for serving static files from inside root directory (public)
app.use(express.json()) // parsing the body for incoming requestwith json payload (data)
app.use(express.urlencoded())// parsing the body for incoming requestwith urlencoded (from the browser,) payload (data)
app.use(morgan('tiny'))// logging 







// app.use((req,res,next)=>{
// 	console.log('from inside the second middleware',req.test)
// 	req.user = {name:'john',id:3};
// 	next();
// })

app.get('/',(req,res)=>{
	console.log(req.params)
	console.log('from inside request handleer',req.test)

	
	res.send('<h1>hello world</h1>')
});
app.get('/image',(req,res)=>{
	const imagePath = path.join(__dirname,'nature.jpg');
	res.sendFile(imagePath)
});



//user routes
app.use('/users',userRoutes)
app.use('/todos',todosRoutes)





app.use((err,req,res,next)=>{
	const statusCode = err.statusCode || 500;
	res.status(statusCode).send({
		status:statusCode,
		message: err?.message || 'internal server error',
		errors: err?.errors || []
	})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})