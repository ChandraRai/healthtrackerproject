const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DailyInfoSchema = new mongoose.Schema({
    bodyTemperature: {
        type: Number,
        required: 'Patient Body Temperature is required'
    },
    weight: {
        type: Number
    },
    bloodSugar: {
        type: Number
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'Patient ID is required'
    },
    recorded: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('DailyInfo', DailyInfoSchema);