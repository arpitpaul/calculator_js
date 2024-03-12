const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){

    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res)
{
    var num1= Number(req.body.num1);

    var num2= Number(req.body.num2);

    switch(req.body.sign)
    {
        case '+': var result = num1+num2;
        break;

        case '-': var result =num1-num2;
        break;

        case '/': var result= num1/num2;

        break;

        case '*': var result= num1*num2;

        break;

        default: alert("No operation  more!!");


    }

   

    res.send(" The result is " + result);
})

app.listen(3000, function(){

    console.log("port 3000 has activated");
})