const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
//const mongoose = require('mongoose')
connectDb();
const port = process.env.PORT || 5000;

app.use(express.json());
//mongoose.connect('mongodb+srv://root:root1234@samicluster.2cipebb.mongodb.net/?retryWrites=true&w=majority&appName=samiCluster');

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port , () =>{
    console.log(`Server running on port ${port}`);
});