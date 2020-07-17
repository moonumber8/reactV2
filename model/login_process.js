const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
require("./connect_db");
const dataUser = require("./user_schema");


router.post("/login", async (req, res) => {
  const { email, pws } = req.body;
  let result = await dataUser.findOne({email:{$eq:email}});
  if (result != null) {
    if (bcrypt.compareSync(pws, result.password)) {
        res.json(result);
    } else { 
      res.json({
        result: "NO",
        message: "no passWord",
      });
    }
  }else{
      res.json({result: "No", message: "no userName"})
  }
});


module.exports = router;
