const mongoose = require('mongoose');
const DailyInfo = mongoose.model('DailyInfo');
var ObjectId = require('mongoose').Types.ObjectId;

exports.create = function (req, res, next) {
    var dailyInfo = DailyInfo();
    dailyInfo.bodyTemperature = req.body.bodyTemperature;
    dailyInfo.weight = req.body.weight;
    dailyInfo.bloodSugar = req.body.bloodSugar;
    dailyInfo.patient = req._id;

    dailyInfo.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });

};

exports.list = function (req, res) {
    DailyInfo.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving Daily Info :' + JSON.stringify(err, undefined, 2));
        }

    });
};

exports.listbyId = function (req, res) {
    DailyInfo.find({
        'patient': req._id
    }, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in Retrieving Daily Info:' + JSON.stringify(err, undefined, 2))
        }
    })
}

exports.getDailyInfobyId = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Daily Info with given id: ${req.params.id}`)

    DailyInfo.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Retrieving Daily Info:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.updateDailyInfo = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Daily Info with given id: ${req.params.id}`)

    var dailyInfo = {
        bodyTemperature: req.body.bodyTemperature,
        weight: req.body.weight,
        bloodSugar: req.body.bloodSugar
    };

    DailyInfo.findByIdAndUpdate(req.params.id, {
        $set: dailyInfo
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Daily Info:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.deleteDailyInfo = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Daily Info with given id: ${req.params.id}`)

    DailyInfo.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Deleting Daily Info:' + JSON.stringify(err, undefined, 2))
        }
    });
};