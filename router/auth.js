const express = require('express')
const router = express.Router();
const sendEmail =require("./sendEmail")


router.post("/contact", async (req, res) => {
    try{
    const { name, email,msg} = req.body;

    if (!name || !email || !msg) {
       
        return res.status(422).json({ error: "please fill all the fields" });
    }

    
    await sendEmail({
        email: "rk785164@gmail.com",
        subject: `Mail from Portfolio ${email}`,
        message:msg,
    })

    res.status(200).json({
        success: true,
        message: `Email sent successfully`,
    });
}catch(err){
    console.log(err);
}
})

module.exports = router;