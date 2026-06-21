//const rewardRoutes = require("./routes/rewardRoutes");
const donationRoutes = require("./routes/donationRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
//app.use("/api/rewards", rewardRoutes);

const app = express();


// Connect Database
connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/donations", donationRoutes);


// Test Route
app.get("/", (req, res) => {

    res.send("Crowdfunding Backend Running");

});


// Start Server
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});