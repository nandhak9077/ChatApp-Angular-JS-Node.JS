const http = require('http');

// to include all modules or all files
//which allows us to support HTTp protocol and socket.IO
const express = require('express');
const app = express();

// app.listen(3000, () => {
//     console.log('Server started!');
// });

/*body-parser parses your request and converts it into a 
format from which you can easily extract relevant information that you may need.*/
const bodyParser = require('body-parser');

/*Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
and exposes the resulting object (containing the keys and values) on req.body.*/
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());
var expressValidator = require('express-validator')
app.use(expressValidator());

//imporing socket io to get connection between client and server
var socketIO = require('socket.io');
//var chatController = require('./controller/chatController');

// const server = http.createServer(app)

const mongoose = require('mongoose');
const route = require('../server/routes/route');

var server = app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})


// const server = http.createServer(app);
const io = require('socket.io')(server);



app.use('/', route); // calling router

app.use(express.static('client'));



const cors = require('cors');
app.use(cors())


// const server= http.createServer(app);
// var io = socketIO(server);


const dbConfig = require('./config/configurl');

app.use(express.static('/home/bridgeit/Desktop/chatapplication/client/templates/login.html'));

//connection to the mongo database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to database");
}).catch(err => {
    console.log("could not connect to the database");
    process.exit();
});