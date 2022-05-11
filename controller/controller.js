const pool = require('../db/db')
class Controller {
    static async demo(req, res){
        try{
            pool.query("select * from users",(err,results)=>{
                if (err) throw err;
                res.status(200).json(results.rows);
        });
        }catch(e){

        }

    }
}
module.exports=Controller