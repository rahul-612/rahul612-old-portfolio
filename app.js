const dotenv=require("dotenv");
const express=require("express");
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn');
const User=require('./model/mailSchema')
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(require('./router/auth'))

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
 }

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})