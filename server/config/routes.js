const BikeMarketplace = require('../controllers/ctrl_bikemarketplace');
var path = require('path');

module.exports = function (app) {
    app.post('/e2etest', (req, res) => {BikeMarketplace.e2etest(req, res);});
    
    //POST
    app.post('/api/bikemarketplace/newbike', (req, res) => {BikeMarketplace.newbike(req, res);});
    app.post('/api/bikemarketplace/Update/:id', (req,res)=> {BikeMarketplace.updateId(req, res);});
    app.post('/api/bikemarketplace/addrating/:id', (req,res)=> {BikeMarketplace.appendto_arrayratings(req, res);});
    
    //GET
    app.get('/api/bikemarketplace/retrieveall', (req,res)=> {BikeMarketplace.retrieveAll(req, res);});
    app.get('/api/bikemarketplace/retrieveId/:id', (req,res)=> {BikeMarketplace.retrieveId(req, res);});
    
    app.delete('/api/bikemarketplace/Delete/:id', (req,res)=> {BikeMarketplace.deleteId(req, res);});
    
    // Enabling Angular routes:
    app.get("*");
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}