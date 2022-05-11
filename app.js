// const express = require('express');
// const app = express();
// const PORT = 5000;

// app.use("/",(req,res)=>{
//     res.send("Hello Nitin welcome to AWS...");
// });

// app.listen(PORT,(req,res)=>{
//     console.log("server is running on Port : 5000");
// })
const express = require("express");
const app = express();
const routes = require("./routes/index");

const pool = require("./db/db"); //import file from db folder

// connect with pg database
pool.connect(function(err) {
	if (err) throw err;
	console.log("connected to postgres db..");
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

const PORT=5000;



app.listen(PORT, () => {

	console.log(`This users app listening at : http://localhost:${PORT}`);

	

});


