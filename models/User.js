const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    blockedTimes: {
        type: [Number], // [start,end,start,end..]
        default: []
    },
    focusedTimes: {
        type: [Number], // [start,end,start,end..]
        default: []
    },
    sleepTime: {
        type: Number,
        default: 1380 //11pm (60*23) 
    },
    wakeupTime: {
        type: Number,
        default: 1380 //11pm (60*23) 
    },
    maxBlock: {
        type: Number,
        default: 2
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User;