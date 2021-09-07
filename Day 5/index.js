const express = require('express');
const app = express();
 

app.get('/',(req,res) => {
    // res.send({a:"a"});  //we can send an obj  
    // res.send(['A','B']);  //we can send an arrray
    // res.sendStatus(200); //this means succesful
    // res.sendStatus(201);    // updated successfuly
    // but this too generic therefore,
    // res.json({1:'fvdfv'});   //we use this for sending json

    // res.status(200).send("hello") //pipelining

    
    
});

app.get("/products" ,(req,res) => {
    res.send(req.query.q)   //for eg if we write localhost:3000/products?limit=50&q="something"
    // products?limit=50&q="something" this will be converted into json and returened;
})

app.listen(3000);
