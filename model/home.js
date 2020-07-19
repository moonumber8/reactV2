const express = require('express');
const router = express.Router();
require('./connect_db');
const dataModel = require('./data_schema');

router.get("/home", (req, res)=>{
    dataModel.find({"poster":{$ne:null}},(err, data)=>{
        if (err) res.json({result: "failed"});
        res.json({ data });
    }).limit(30);
});

module.exports = router;