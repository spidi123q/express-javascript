'use strict';
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({
    origin: true
});
const mongoose = require('mongoose');
const config =  require('./config/config')
const bodyParser = require('body-parser');
const contentTypeOverride = require('express-content-type-override');
const multer  = require('multer')
const router = require('./app/routes/routes')

/*------------------------ Inits -----------------------------------------*/
/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.firebase.databaseURL
}); */
const app = express();
/*------------------------ End -----------------------------------------*/

/*------------------------ Middlewares -----------------------------------------*/

app.use(cors);
app.use(cookieParser);
app.use(multer().any())
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: 'true',
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '5mb'})); // parse application/json

/*------------------------ End -----------------------------------------*/

var options = {
    auto_reconnect: true,
    reconnectTries: 60,
    reconnectInterval: 500,
    useNewUrlParser: true
};

mongoose.connection.on('connecting', function () {
    console.log('connecting to MongoDB...');
});

mongoose.connection.on('error', function (err) {
    console.log(err);
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

mongoose.connection.on('disconnected', function () {
    console.log("Mongoose default connection is disconnected");
});

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected!');
});

mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    //mongoose.connect(config.databaseurl, options);
});

mongoose.connect(config.databaseURL, options);

app.get('/test', (req, res) => {
    //fcmService.fcmSendToTopic('new-quotes','hi','test');
    res.send('test donee');
});

app.use('/api/v1/', router)
//exports.app = functions.https.onRequest(app);
module.exports = app;