const mongoose = require("mongoose");


const campaignSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    description:{
        type:String,
        required:true
    },


    category:{
        type:String,
        required:true
    },


    goal:{
        type:Number,
        required:true
    },


    raised:{
        type:Number,
        default:0
    },


    image:{
        type:String,
        default:""
    },


    creator:{
        type:String,
        required:true
    },


    createdAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model(
    "Campaign",
    campaignSchema
);