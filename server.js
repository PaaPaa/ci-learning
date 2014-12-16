//Import modules
var express = require("express");
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data.js");

//Create the application
var app = express();

var jobService = require("./jobs-service.js")(jobsData, app);

//Define the root folder for the application and the view engine that it uses
//Jade is a high level language for defining html
app.set('views', __dirname);
app.set('view engine', 'jade');

//Define the top level folder of the page
app.use(express.static(__dirname + '/public'));

// //Define the routing
// app.get('/api/jobs', function(req, res){
//     jobsData.findJobs().then(function (collection){
//         res.send(collection);
//     })
// });


app.get('*', function(req,res){
    res.render('index');
});

//Connect to the database
//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://psdev:admin@ds061620.mongolab.com:61620/jobfinderpaa')
.then(function(){
    console.log('connection to mongodb successfully');
    jobsData.seedJobs();
});


app.listen(process.env.PORT, process.env.IP);