const mongoose = require('mongoose');
const Tips = mongoose.model('Tips');
var ObjectId = require('mongoose').Types.ObjectId;

exports.create = function (req, res, next) {
    var tips = Tips();
    tips.content = req.body.content;
    tips.patient = req.body.patient;
    tips.nurse = req._id;

    tips.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });

};

exports.list = function (req, res) {
    Tips.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving Tips :' + JSON.stringify(err, undefined, 2));
        }

    });
};
exports.listbyId = function (req, res) {
    Tips.find({
        'patient': req._id
    }, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in Retrieving Tips:' + JSON.stringify(err, undefined, 2))
        }
    })
}
exports.getTipsbyId = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Tips with given id: ${req.params.id}`)

    Tips.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Retrieving Tips:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.updateTips = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Tips with given id: ${req.params.id}`)

    var tips = {
        content: req.body.content
    };

    Tips.findByIdAndUpdate(req.params.id, {
        $set: tips
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Tips:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.deleteTips = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Tips with given id: ${req.params.id}`)

    Tips.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Deleting Tips:' + JSON.stringify(err, undefined, 2))
        }
    });
};