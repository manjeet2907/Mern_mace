const dotenv =require('dotenv');
const mongoose =require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
const PORT =process.env.PORT;

require('./db/conn');
// Const User = require('./Model/userSchema');
app.use(express.json());
// creating a seprate routing file for routing inside the app/backend
app.use(require ('./Router/auth'));

// Middlewre
const middleware = (req,res,next) =>{
    console.log(`Middleware`);
    next();
}


app.get('/' , (req, res)=>{
    res.send('Hello from server');

});
app.get('/about' ,middleware, (req, res)=>{
    res.send('Hello about from server');    

});
app.get('/contact' , (req, res)=>{
    res.send('Hello Contact from server');

});
app.get('/signin' , (req, res)=>{
    res.send('Hello  sign in from server');

});
app.get('/sign uo' , (req, res)=>{
    res.send('Hello sign up from server');

});


app.listen(3000, ()=>{
    console.log("server is running at" , PORT)
})
