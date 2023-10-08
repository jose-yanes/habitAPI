const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'No name provided for the habit'],
        minlength:3,
        maxlength:50
    },
    date:{
        type:Date,
        required:true
    },
    quantity:{
        type:Number,
        min:0
    },
    createdBy:{
        type:String
    },
    status:{
        type:Boolean,
        required:[true,'No status provided'],
        default:true
    }
})

module.exports = mongoose.model('Update',UpdateSchema);
