const mongoose = require('mongoose');
const Clinic = mongoose.model('Clinic');
var ObjectId = require('mongoose').Types.ObjectId;

exports.create = function (req, res, next) {
    var clinic = Clinic();
    clinic.bodyTemperature = req.body.bodyTemperature;
    clinic.bloodPressure = req.body.bloodPressure;
    clinic.heartRate = req.body.heartRate;
    clinic.respiratoryRate = req.body.respiratoryRate;
    clinic.patient = req.body.patient;
    clinic.nurse = req._id;

    clinic.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });

};

exports.list = function (req, res) {
    Clinic.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Clinical Visits :' + JSON.stringify(err, undefined, 2));
        }

    });
};

exports.getClinicbyId = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No clinical visit with given id: ${req.params.id}`)

    Clinic.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Retrieving Clinical Visit:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.updateClinic = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Clinical Visit with given id: ${req.params.id}`)

    var clinic = {
        bodyTemperature: req.body.bodyTemperature,
        heartRate: req.body.heartRate,
        bloodPressure: req.body.bloodPressure,
        respiratoryRate: req.body.respiratoryRate
    };

    Clinic.findByIdAndUpdate(req.params.id, {
        $set: clinic
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Updating Clinical Visit:' + JSON.stringify(err, undefined, 2))
        }
    });
};

exports.deleteClinic = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Clinical Visit with given id: ${req.params.id}`)

    Clinic.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            console.log('Error in Deleting Clinical Visit:' + JSON.stringify(err, undefined, 2))
        }
    });
};


//GetClinicByPatientId
exports.getClinicbyPatientId = function (req, res) {

    Clinic.find({
        patient: req.params.id
    }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }

        if (data.length == 0) {
            console.log("No record found")
            return
        }

        res.send(data);
    })
};