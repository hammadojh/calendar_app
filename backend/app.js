const bodyParser = require("body-parser");
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const dotenv = require('dotenv');

// express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use('/tasks', require('./routes/taskRoutes'))
app.use('/users', require('./routes/userRoutes'))

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})