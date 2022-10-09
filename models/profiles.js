const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    profileCategory:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Profiles', profileSchema);