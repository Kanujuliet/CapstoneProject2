const bcrypt = require('bcrypt')
const {getConnection, runQueryValues, loginSyntax} = require('../config/connection')


const signin = async(req,res)=>{
    const userData ={
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    const connection = await getConnection();
try{
    const result = await runQueryValues(connection,loginSyntax,[credentials.username])
    const vFy = await bcrypt.compare(credentials.password,result.password)
    if(vFy){
        res.status(200).json({message:result})
    }
    else{
        res.status(200).json({message:'Invalid signin credentials'})
    }
   
}
catch(err){
    console.log(err)
}
}
module.exports = {signin}