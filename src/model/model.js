const mongoose = require('mongoose');
const UserModel = new mongoose.Schema({
    company : {
        type : String,
    },
    bill :{
        type: String,
    },
    date :{
        type: String,
    },
    ptype: {
        type :String,
    },
    pname :{
        type : String,
    },
    pno :{
        type : String,
    },
    batchno :{
        type : String,
    },
    pqty :{
        type : String,
    },
    free :{
        type : String,
    },
    rate :{
        type : String,
    },
    disi :{
        type : String,
    },
    amount:{
        type : String,
    },
},{timestamps : true})

module.exports = mongoose.model("user",UserModel)
