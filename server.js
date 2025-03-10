require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the CLimate API");
}
);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT,)