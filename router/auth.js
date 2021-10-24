const express = require('express')
const router = express.Router();
require('../db/conn');
const Mail = require('../model/mailSchema')


//store user data
router.post("/contact", async (req, res) => {
    const { name, email,msg} = req.body;

    if (!name || !email || !msg) {
       
        return res.status(422).json({ error: "please fill all the fields" });
    }

    try {
        
        const mail = new Mail({ name, email, msg });

        await mail.save();
        res.status(201).json({ message: "sent successfully!" })
        
        
    }
    catch (err) {
        console.log(err);
    }

})

module.exports = router;