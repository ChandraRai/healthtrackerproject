const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = User();
    user.userName = req.body.userName;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.role = req.body.role;
    user.password = req.body.password;

    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
        if (err.code == 11000)
            res.status(422).send(['Username already exists.']);
        else
            return next(err);
    });

}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(400).json(err);
        else if (user) return res.status(200).json({
            "token": user.generateJwt()
        });
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.getPatients = function (req, res) {
    User.find({
        'role': 'patient'
    }, '_id userName firstName lastName', (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Patients :' + JSON.stringify(err, undefined, 2));
        }
    })
}