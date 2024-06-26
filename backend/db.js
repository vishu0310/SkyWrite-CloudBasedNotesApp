const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://vishupatle0310:LkbXnYn2iX6PR2uw@dbconnect.pmnk3kk.mongodb.net/"; 
mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongoose Successfully");
    })
}

module.exports = connectToMongo;