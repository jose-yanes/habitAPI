const mongoose = require('mongoose');

//check required values

const HabitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
        minlength:3,
        maxlength:50
    },
    code:{
        type:String,
        maxlength:10
    },
    createdBy:{
        type:String,
        required:[true,"Sorry, we're having some problems with your user, please log in again :)"]
    }
})

module.exports = mongoose.model('Habit',HabitSchema);