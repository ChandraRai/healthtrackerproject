const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded.');
    } else {
        console.log('Error in MongDb connection: ' + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model')
require('./dailyInfo.model')
require('./tips.model')
require('./clinicVisit.model')