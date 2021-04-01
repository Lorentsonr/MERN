const mongoose = require('mongoose');
const SurfSpotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "SurfSpot Name is required"],
        minlength: [3,"SurfSpot Name must be at least 3 characters"]
    },
    city: {
        type: String,
        required: [true, "SurfSpot City is required"],
        minlength: [3,"SurfSpot City must be at least 3 characters"]
    },
    location: {
        type: String,
        required: [true, "SurfSpot Location is required"],
        minlength: [3,"SurfSpot Location must be at least 3 characters"]
    },
    airTemp: {
        type: Number,
        required: [true, "SurfSpot Air Temp is required"],
    },
    waterTemp: {
        type: Number,
        required: [true, "SurfSpot Water Temp is required"],
    },
    windSpeed: {
        type: Number,
        required: [true, "SurfSpot Wind Speed is required"],
    },
    waveHeight: {
        type: Number,
        required: [true, "SurfSpot Wave Height is required"],
    },
}, { timestamps: true });

mongoose.model('SurfSpot', SurfSpotSchema);