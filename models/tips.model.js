const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: 'Content must be completed'
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    nurse: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    recorded: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Tips', TipsSchema);