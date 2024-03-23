const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//return all tasks
router.get('/', taskController.getAllTasks);

// Create a task 
router.post('/', taskController.createTask);

//Schedule a task 
module.exports = router;