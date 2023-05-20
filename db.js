const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://alisleem:vXqrv6Qbmwm79CA0@cluster0.iihrpo0.mongodb.net/express?retryWrites=true&w=majority")
.then(()=>console.log('connected to db'))
.catch((err)=>{
	console.log(err)
});

