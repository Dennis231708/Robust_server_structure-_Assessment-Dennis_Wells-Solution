const express = require('express');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urls/urls.routes'); // Import the URLs routes
const useRoutes = require('./routes/uses/uses.routes'); // Import the Uses routes

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/urls', urlRoutes); // Mount the URLs routes under the /urls path
app.use('/uses', useRoutes); // Mount the Uses routes under the /uses path

// Not-found handler
app.use((req, res, next) => {
    return next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
});

module.exports = app;
