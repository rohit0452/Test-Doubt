const express = require('express')
const path = require('path')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')

const cors = require('cors')
const app= express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json)


// TOKEN AUTHENTICATION- ALL THE ROUTES WRITTEN BELOW THIS WILL NEED TOKEN TO BE SENT in request headers

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-COntrol-Allow-Header',
     'Origin , X-Requested-With ,Content-Type, Accept, Authorization')
    res.setHeader(('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS'))
    next();    
});

// USing Routes

app.use('api/todo',require('./routes/index'));
    mongoose
    .connect('mongodb://127.0.0.1:27017/todo',{
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(()=>{
console.log("Server Has Started Mongo")
app.listen(5000);
})
.catch(err=>{
    console.log(err)
})
