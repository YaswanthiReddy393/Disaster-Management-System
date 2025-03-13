const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/disasterManagement");

const DisasterSchema = new mongoose.Schema({
    name: String,
    location: String,
    severity: String
});

const Disaster = mongoose.model("Disaster", DisasterSchema);

async function insertData() {
    await Disaster.insertMany([
        { name: "Earthquake", location: "Telangana", severity: "High" },
        { name: "Flood", location: "Hyderabad", severity: "Moderate" },
        { name: "Cyclone", location: "Visakhapatnam", severity: "Severe" },
        { name: "Wildfire", location: "Adilabad", severity: "High" },
        { name: "Landslide", location: "Warangal", severity: "Moderate" }
    ]);
    console.log("Data inserted!");
}

insertData().catch(console.error);
