const mongoose = require('mongoose');

const BikesSchema = new mongoose.Schema({
    bikename: { type: String, required: [true, "Bike name is required"], minlength: [3, "Bike name should be at least 3 characters long"] },
    biketype: { type: String, required: [true, "Bike type is required"], minlength: [3, "Bike type should be at least 3 characters long"] },
    manufacturer: { type: String, required: [true, "Manufacturer is required"], minlength: [3, "Manufacturer should be at least 3 characters long"] },
    numberofspeeds: 0,
    arrayratings: [{
        customer: { type: String, minlength: [3, "Customer should be at least 3 characters long"] },
        rating: 0,
        comment: { type: String, minlength: [3, "Comment should be at least 3 characters long"] },
    }]

}, { timestamps: true })
const Bike = mongoose.model('mongodb_bikes', BikesSchema);

//Exports:
module.exports = {
    Bike: Bike,
};
