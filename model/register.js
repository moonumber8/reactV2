const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
require('./connect_db');
const dataUser = require('./user_schema');
const { json } = require('body-parser');

router.post("/", async (req, res)=>{
   
    const hashedPassword = await bcrypt.hash(req.body.pws, 8)

    users = {
           email: req.body.email,
           password: hashedPassword,
           name: "test",
       }
       dataUser.create(users, (err, doc)=>{
        if(err) res.json({result:"failed"});
        res.json({data: doc});
    }); 


});

module.exports = router;