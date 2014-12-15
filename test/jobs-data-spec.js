var expect = require("chai").expect;
var mongoose = require('mongoose');
var Promise = require('bluebird');
var jobModel = require('../models/Job.js');
var jobsData = require("../jobs-data.js");




//Test must connect to the jobfinder database then reset the jobs, when connection has been made. It then tests that the application is actually
//seeding the jobs
describe("get jobs", function() {
    var jobs;
    
    before(function(done){
        
          jobsData.connectDB('mongodb://localhost/jobfinderpaa')
            .then(jobsData.resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) {
                jobs = collection;
                done();
            });
     
    });
    
    it("should never be empty since jobs are seeded", function() {
                 expect(jobs.length).to.be.at.least(1);
    });
    
    it("should have a job with a title", function(){
        expect(jobs[0].title).to.not.be.empty;
    })

    it("should have a job with a description", function(){
        expect(jobs[0].description).to.not.be.empty;
    })
});