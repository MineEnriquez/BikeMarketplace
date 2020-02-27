const mongoose = require('mongoose');
const MongModels = require('../models/model_bike');
const flash = require('express-flash');
const Bike = MongModels.Bike;

module.exports = {
    newbike: function (req, res){
        console.log ("creating a new Bike record");
        _newbike = req.body;
        console.log(_newbike);
        bike = new Bike(_newbike);
        bike.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error crating a new Bike record, please make sure the contract is correct");
                res.json(err);
            });
    }
}