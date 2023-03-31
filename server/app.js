const express = require('express')
const cors = require('cors')
const {errorHandler} = require("./middleware/errorMiddleware")
const PORT = 3000;

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