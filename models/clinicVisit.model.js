const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClinicSchema = new mongoose.Schema({
    bodyTemperature: {
        type: Number,
        required: 'Patient Body Temperature is required'
    },
    heartRate: {
        type: Number
    },
    bloodPressure: {
        type: Number
    },
    respiratoryRate: {
        type: Number
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'Patient ID is required'
    },
    nurse: {
        type: Schema.ObjectId,
        ref: 'User',
        required: "Nurse ID is required"
    },
    recorded: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Clinic', ClinicSchema);