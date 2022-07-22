const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const userRoute=require('./routes/users');
const authRoute=require('./routes/authorisation');
const postroute=require('./routes/posts');
const app=express();

const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_DB_URL,()=>{
    console.log("connected to database");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/post',postroute);


app.listen(3000,()=>{
     console.log("server running on 3000");
})