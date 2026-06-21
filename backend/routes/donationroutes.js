const Reward = require("../models/reward");
const express = require("express");

const Donation = require("../models/donation");

const Campaign = require("../models/campaign");


const router = express.Router();




// CREATE DONATION

router.post("/donate", async(req,res)=>{


    try{


        const donation = new Donation(req.body);


        await donation.save();
        let rewardName;


if(donation.amount >= 5000){

    rewardName = "Impact Hero 🏆";

}

else if(donation.amount >= 2000){

    rewardName = "Change Maker 🌱";

}

else{

    rewardName = "Supporter ❤️";

}



const reward = new Reward({

    donorName: donation.donorName,

    donorEmail: donation.donorEmail,

    donationAmount: donation.amount,

    rewardName: rewardName

});


await reward.save();



        await Campaign.findByIdAndUpdate(

            donation.campaignId,

            {
                $inc:{
                    raised:donation.amount
                }
            }

        );



        res.json({

            message:"Donation successful",

            donation

        });



    }


    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;