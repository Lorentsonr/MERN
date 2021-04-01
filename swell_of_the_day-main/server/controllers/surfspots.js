const mongoose = require("mongoose");
const SurfSpot = mongoose.model("SurfSpot");

module.exports = {
    create: (req, res) => {
        SurfSpot.create(req.body)
            .then(surfspot => {
                console.log(surfspot);
                res.json(surfspot);
            })
            .catch(err => {
                res.status(400).json(err)
            })

    },
    findAll: (req, res) => {
        SurfSpot.find()
            .then(surfspots => {
                console.log(surfspots);
                res.json(surfspots);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    findOne: (req, res) => {
        SurfSpot.findOne({_id: req.params.id})
            .then(surfspot => {
                console.log(surfspot);
                res.json(surfspot);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    update: (req, res) => {
        SurfSpot.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(updatedSurfSpot => {
                console.log(updatedSurfSpot);
                res.json(updatedSurfSpot);
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    delete: (req, res) => {
        SurfSpot.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => {
                console.log(deleteConfirmation);
                res.json(deleteConfirmation);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

}