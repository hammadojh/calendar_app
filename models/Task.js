const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 60
    },
    due: {
        type: Date,
        default: new Date()
    },
    mentalEffor: {
        type: Number,
        default: null
    },
    physicalEffort: {
        type: Number,
        default: null
    },
    enjoyment: {
        type: Number,
        default: null
    },
    timeSpent: {
        type: Number,
        default: 0
    },
    playing: {
        type: Boolean,
        default: false
    },
    done: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chunks: [{
        duration: {
            type: Number,
            required: true
        },
        scheduledTime: {
            type: Date,
            default: null
        }
    }]
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;