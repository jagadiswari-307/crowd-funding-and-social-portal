const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();


router.post("/register", async(req,res)=>{

    try{

        const {name,email,password}=req.body;


        // Check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        // Encrypt password
        const hashedPassword = await bcrypt.hash(password,10);


        const newUser = new User({

            name,
            email,
            password:hashedPassword

        });


        await newUser.save();


        res.json({

            message:"User registered successfully"

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});

router.post("/login", async(req,res)=>{

    try{

        const {email,password}=req.body;


        const user = await User.findOne({email});


        if(!user){

            return res.status(400).json({
                message:"User not found"
            });

        }


        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){

            return res.status(400).json({
                message:"Invalid password"
            });

        }


        res.json({

            message:"Login successful",
            user:{
                name:user.name,
                email:user.email
            }

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});
router.post("/login", async(req,res)=>{

    try{

        const {email,password}=req.body;


        const user = await User.findOne({email});


        if(!user){

            return res.status(400).json({

                message:"User not found"

            });

        }


        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){

            return res.status(400).json({

                message:"Invalid password"

            });

        }


        res.json({

            message:"Login successful",

            user:{
                name:user.name,
                email:user.email
            }

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

});

module.exports = router;