const mongoose = require("mongoose");


const rewardSchema = new mongoose.Schema({

    donorName:{
        type:String,
        required:true
    },

    donorEmail:{
        type:String,
        required:true
    },

    rewardName:{
        type:String,
        required:true
    },

    donationAmount:{
        type:Number,
        required:true
    },

    awardedAt:{
        type:Date,
        default:Date.now
    }

});


module.exports = mongoose.model("Reward", rewardSchema);