var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

mongoose.model('Job', jobSchema);



        // exports.seedJobs = function() {
        //     return new Promise(function(resolve, reject) {
        //         Job.find({}).exec(function(error, collection) {
        //             if (collection.length === 0) {
        //                 Job.create({
        //                     title: 'Cook',
        //                     description: 'You will make really good food'
        //                 });
        //                 Job.create({
        //                     title: 'Waiter',
        //                     description: 'You will serve rude customers'
        //                 });
        //                 Job.create({
        //                     title: 'Programmer',
        //                     description: 'You will write excellent code'
        //                 });
        //                 Job.create({
        //                     title: 'Aze Grinder',
        //                     description: 'You will bear grudges to everyone'
        //                 }, resolve);
        //             }

        //         });
        //     });
