
const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
const route = require("./routers/route");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use("/", route);
// Handle unsupported routes


// Start the server

mongoose.connect("mongodb+srv://Narendrapatidar:LRMKecvjA5XotfMK@cluster0.hxlgz.mongodb.net/counter", {
    useUnifiedTopology: true, useNewUrlParser: true
})
app.listen(`${process.env.PORT || 3000}`, function () {
    console.log(`Express app running on port ${process.env.PORT || 3000} `);
});
