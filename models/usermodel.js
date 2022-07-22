const mongoose = require('mongoose');
//schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
        min:6,
        max:14
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    profile_pic:{
        type:String,
        default:""
    },
    Gender:{
        type:String,
        default:""
    },
    Mobile_No:{
        type:Number,
        min:10,
        max:10
    }
},
{timestamps:true}
)
module.exports=new mongoose.model("User",userSchema);