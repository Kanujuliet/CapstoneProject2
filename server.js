const express = require("express")
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

const { insertUser } = require('./controller/userdataCtl.js')
const {router} = require("./Routes/rts");

app.use(express.json());

//app.post("/register", async (req, res) =>{
   // try{
     //  const hashedpassword  = await bcrypt.hash(req.body.password, 10)
     //  res.redirect("/signin")
   // }catch{

  //  }
//})

app.post('/register', insertUser);

//app.use((req,res,next)=>{
 // res.locals.username = "myUsername"
 // next()
//})


app.use('/', router);

app.get('/search', (req, res) => {
  const productName = req.query.productName;
  const sql = `SELECT * FROM drug_data WHERE productName LIKE '%${productName}%'`;
 
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.listen(3500,function(){
  console.log("server is running")
})