const express = require('express');
const router = express.Router();
require('./connect_db');
const dataModel = require('./data_schema');

router.post("/:obj_id", (req, res)=>{
    dataModel.find({"_id":{$eq:req.params.obj_id}},(err, data)=>{
        if (err) res.json({result: "failed"});
        res.json({ data });
    }).limit(30);
});

module.exports = router;