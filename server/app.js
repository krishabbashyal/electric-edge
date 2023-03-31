const express = require('express')
require('dotenv').config();
const cors = require('cors')
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")


const PORT = process.env.PORT;
connectDB()
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", require('./routes/chargerRoutes'))
app.use(errorHandler)

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);