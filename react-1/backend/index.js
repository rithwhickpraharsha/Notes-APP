const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Note = require("./models/notes");
const User = require("./models/users");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 5000;
const {Evaluate,note} = require('./Evaluate');
const jwt = require('jsonwebtoken');
const users = require('./models/users');
const salt = process.env.JWT_STRING
try{
    mongoose.connect('mongodb://127.0.0.1:27017/Talker-App');

    console.log("mongo SuccessFull");
    }
    catch(err){
        console.log(err);
    }

app.post('/add', async (req, res) => {
    try {
      const body = req.body;
      console.log(req.body);
      const upload = note.safeParse(body);
      if(upload.success){
      await Note.create({ title: body.title, description: body.description, user_gmail: body.user_gmail });
      res.json({ msg: 'Note added successfully' });
      }
      else{
        res.status(404).send("Invalid Input given");
      }
    } catch (err) {
      console.error('Error adding note:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.post('/show',async(req,res)=>{
    try{
        
        const data  = await Note.find({user_gmail: req.body.email});
        res.json(data);

        }
        catch(err){
            console.log(err);
        }

});

app.post('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        res.json({"msg" : "Note Deleted SuccessFully"});

        }
        catch(err){
            console.log(err);
        }

});

app.put('/update/:id',async(req,res)=>{
    const id = req.params.id;
    try{
     await Note.updateOne({_id:id},{title:req.body.title,description:req.body.description,user_gmail:req.body.user_gmail});
     res.status(200).json({"msg" : "Update SuccessFull"});
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Error");
    }

});

app.post('/users/signup',async(req,res)=>{
    const upload = Evaluate.safeParse(req.body);
    if(upload.success){

        const check = await User.findOne({user_gmail:req.body.email});
        if(!check){
            await User.create({username:req.body.username,user_gmail:req.body.email,user_password:req.body.password});
        try{
            const token = jwt.sign({user_gmail:req.body.email,user_password:req.body.password},salt);
            res.status(200).json({
                email : req.body.email,
                token : token
            });
        }catch(e){
            console.log(e);
        } 

        }
        else{
            res.status(404).json({"msg":"user Already Exists. Please Login"});
        }

        

    }
    else{
        res.status(404).send("Invalid Input Given");
    }

});
app.post('/users/login', async(req,res)=>{
 
    try{
     const check = await User.findOne({user_gmail:req.body.email});
     
     if(check){
      const password = check.user_password;
      
      if(password == req.body.password){
        const token = jwt.sign({user_gmail:req.body.email,user_password:req.body.password},salt);
        res.status(200).json({
            email : req.body.email,
            token : token
        });
      }
      else{
        res.status(404).send("Password is incorrect");
      }
     }
     else{
        res.status(404).send("User doesnot Exist");
     }
    }
   catch(e){
    console.log(e);
        res.status(404).send("Invalid Input Given");
    }
});
app.get('/users/show',async(req,res)=>{
 const data = await User.find({});
 res.send(data);
});
app.listen(PORT);

console.log(PORT);