  require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const app = express()
const cors = require('cors')
const route = require('./src/route/route')

app.use(express.json())
app.use(cors());

mongoose.set("strictQuery", true);
mongoose
  .connect(
    process.env.DB,
   
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/",route)

const port2 = 5000

app.listen(process.env.port || port2, function(){
    console.log("server is running on port no",process.env.port || port2)
})











