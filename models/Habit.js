const mongoose = require('mongoose');

//check required values

const HabitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name'],
        minlength:3,
        maxlength:50
    },
    days:{
        //count of days doing the habit
        type:Number,
    },
    count:{
        type:Number,
        default: 0
    },
    quantity:{
        type:Number
    },
    startDay:{
        type: Date, default: Date.now
    },
    lastUpdate:{
        //last time habit was updated to know if +1days or not
        type: Date, default: Date.now
    },
    streak:{
        //consecutive days doing the habit
        type:Number,
        default: 0
    },
    difficulty:{
        type:String,
        enum:{
            values:['easy','medium','hard','super hard'],
            message: '{VALUE} is not supported'
        },
        default: 'medium'
    },
    createdBy:{
        type:String,
        required:[true,"Sorry, we're having some problems with your user, please log in again :)"]
    }
})

module.exports = mongoose.model('Habit',HabitSchema);