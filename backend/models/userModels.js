const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/paytm");
const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

const User = mongoose.model('User',userSchema);

module.exports = {
    User
};