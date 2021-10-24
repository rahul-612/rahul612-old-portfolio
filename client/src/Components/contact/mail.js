const express=require('express');
const app=express();
const port=process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/mail",async(req,res)=>{
    try{
        const name=req.body.name;   //ye us element k name attribute ko acess kr rhe
        const email=req.body.email;
        res.send("hello")
    }catch(e){
        console.log(e);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})