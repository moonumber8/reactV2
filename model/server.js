const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentialls',true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/v1/authen", require('./api_list_movie'));
app.use("/register", require('./register'));
app.use("/api/v1/login", require('./login_process'));
app.use("/api/v1/home", require('./home'));


app.listen(3080,()=>{
    console.log("server ok");
})