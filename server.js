let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
let connection = require('./bdd.js');

app.use(bodyParser.urlencoded({extended:false}))


app.post('/register',(req,res)=>{
    console.log(req.body);
});

app.listen(8080,()=>{
    console.log('server launch at port 8080');
    
})