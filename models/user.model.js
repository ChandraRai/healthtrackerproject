const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: 'Username can\'t be empty'
    },
    firstName: {
        type: String,
        required: 'First Name can\'t be empty'
    },
    lastName: {
        type: String,
        required: 'Last Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    role: {
        type: String,
        enum: ['nurse', 'patient'],
        required: 'User Role is required'
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },
    saltSecret: String
});


userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id,
        role: this.role
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User', userSchema);