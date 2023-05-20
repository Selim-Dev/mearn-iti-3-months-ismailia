const { string } = require('joi');
const mongoose = require('mongoose')
const { Schema } = mongoose;
const todoSchema = new Schema({
	title:{
		type:String,
		required:true,
	},
	status:{
		type:String,
		enum:['todo','doing','done'],
		default:'todo'
	},
	user:{
		type:Schema.Types.ObjectId,
		ref:'User',
		required:true
	}
})


const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;