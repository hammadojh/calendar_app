const bodyParser = require("body-parser");
const express = require("express");
const db = require("./config/db");
const cors = require("cors");

// express app
const app = express();

// serve public files
app.use(express.static('public'))

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

//default route
app.get('/', (req, res) => {
    res.send('Welcome to the Task Scheduler API')
})

// Start server
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})