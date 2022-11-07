const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const routes = require("./Routes/routes");
require('dotenv').config();
const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.CONNECTION_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
        console.log("Database Connected");
    }).catch((e) => {
        console.log("database Not Connected",e);
    });




app.listen(port, function () {
    console.log(`server started at port ${PORT}`);
})
