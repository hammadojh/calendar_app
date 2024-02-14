const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    timeRequired: {
        type: Number,
        requied: true
    },
    dueDate: {
        type: Date,
        required: true
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
    scheuled: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;