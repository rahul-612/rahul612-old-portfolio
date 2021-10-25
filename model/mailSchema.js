const mongoose=require("mongoose");

const mailSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
  
})


const Mail=mongoose.model("mail",mailSchema);

module.exports=Mail;