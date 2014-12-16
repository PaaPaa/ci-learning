var mongoose = require('mongoose');
var Promise = require('bluebird');

var Job = mongoose.model('Job');

var jobs = [{
    title: 'Cook',
    description: 'You will make really good food'
}, {
    title: 'Waiter',
    description: 'You will serve rude customers'
}, {
    title: 'Programmer',
    description: 'You will write excellent code'
}, {
    title: 'Axe Grinder',
    description: 'You will bear grudges against everyone'
}];


var findJobs = function(query) {
    return Promise.cast(mongoose.model('Job').find(query).exec());
};


exports.closeDB = function (){
    return mongoose.connection.close();
}


var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(jobs, function(job) {
                return createJob(job);
            });
        }
    });
}

exports.resetJobs = function() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

exports.saveJob = createJob;

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);
