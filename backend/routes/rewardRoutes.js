const express = require("express");

const router = express.Router();

const Reward = require("../models/reward");


router.post("/create", async(req,res)=>{


try{


const {
donorName,
donorEmail,
donationAmount
}=req.body;



let rewardName;


if(donationAmount >= 5000){

rewardName="Impact Hero 🏆";

}

else if(donationAmount >= 2000){

rewardName="Change Maker 🌱";

}

else{

rewardName="Supporter ❤️";

}



const reward = new Reward({

donorName,
donorEmail,
donationAmount,
rewardName

});


await reward.save();



res.json({

message:"Reward assigned successfully",

reward

});


}


catch(error){

res.status(500).json({

message:error.message

});

}


});


module.exports = router;