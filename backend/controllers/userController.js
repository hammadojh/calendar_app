const User = require('../models/User');

// Create a new task
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};