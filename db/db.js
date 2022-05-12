const { Pool } = require('pg')

// database details for connection
const pool = new Pool({
    user:"postgres",
    password:"12345678",
    database:"nitin", 
    host: '127.0.0.1',
    port: '5432',  
}) 
  

/*
pool.connect(()=>{
    console.log("Connected to postgres");
    
})
*/


// export pool to use in another file

module.exports=pool;