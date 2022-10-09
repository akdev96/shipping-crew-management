const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// importing route
const profileRoute = require('./routes/profiles');

// App middleware
app.use(bodyParser.json());
// CORS Middleware
app.use(cors());

// Route middleware
app.use(profileRoute);

const PORT = 8000;
const DB_URL = 'mongodb+srv://marineshipping:Logmein001@marineshippingcluster.p7hbcxc.mongodb.net/screwmgmt?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("DB Connected");
})
.catch((err) => console.log('DB Connections error', err));
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});