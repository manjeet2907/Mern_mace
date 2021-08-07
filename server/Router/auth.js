const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send("mera register page");
});

module.exports = router;

// const express=require('express')
// const app = express();
// const router =express.router();

// router.get('/' , (req, res)=>{
//     res.send('Hello from server');

// });

// router.post('/register', (req,res)=>{
//     console.log(req.body);
//     // res.send('page');
//     res.json({message:req.body});
// });

// router.get('/about' ,middleware, (req, res)=>{
//     res.send('Hello about from server');

// });
// router.get('/contact' , (req, res)=>{
//     res.send('Hello Contact from server');

// });
// router.get('/signin' , (req, res)=>{
//     res.send('Hello  sign in from server');

// });
// router.get('/sign uo' , (req, res)=>{
//     res.send('Hello sign up from server');

// });

// module.exports =router;