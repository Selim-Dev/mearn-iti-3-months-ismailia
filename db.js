const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://test:r3fsmKkLaZzlOfbp@cluster0.ynjvvh3.mongodb.net/express?retryWrites=true&w=majority")
.then(()=>console.log('connected to db'))
.catch((err)=>{
	console.log(err)
});

