const express = require("express");

const Campaign = require("../models/campaign");


const router = express.Router();



// CREATE CAMPAIGN

router.post("/create", async(req,res)=>{


    try{


        const campaign = new Campaign(req.body);


        await campaign.save();



        res.json({

            message:"Campaign created successfully",

            campaign

        });


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;
// GET ALL CAMPAIGNS

router.get("/all", async(req,res)=>{


    try{


        const campaigns = await Campaign.find();


        res.json(campaigns);


    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});