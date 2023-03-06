const UserModel = require('../model/model')

const Register =async function(req,res){
   // console.log("controller is coming here ",req.body)

    let data = await UserModel.create(req.body)
    console.log(data)
    res.send({msg2 : 'working'});
}
module.exports = { Register}