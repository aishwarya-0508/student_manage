const express = require("express");

const app = express();
const PORT = 3000;

// Import Routes
const studentRoutes = require("./routes/studentRoutes");

// Import Middleware
const loggerMiddleware = require("./middleware/loggerMiddleware");

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/students", studentRoutes);

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});