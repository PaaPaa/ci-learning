var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require("supertest");
var Promise = require("bluebird");

var dataSavedJob;

var db = {
    saveJob: function(job){
        dataSavedJob = job;
    },
    
    findJobs: function(){
        return new Promise( function(resolve, reject){
            resolve(["hi"]);
        });
    }
}

var jobService = require("../../jobs-service.js")(db, app);

describe("get jobs", function (){
    it("should give me a json list of jobs", function(done){
        request(app).get('/api/jobs')
        .expect('Content-Type', /json/)
        .end(function(err, res){
            expect(res.body).to.be.a('Array');
            done();
        })
        
    })
})
describe("save jobs", function() {
    it("should valiate that title is greater than 4 characters");
    it("should valiate that title is less than 40 characters")
    it("should valiate that description  is greater than 4 characters")
    it("should valiate that description is less than 250 characters")

    var newJob = {
        title: 'Cook',
        description: 'You will make really good food'
    };

    it("should pass the job to the database save", function(done) {
        request(app).post('/api/jobs').send(newJob).end(function(err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        })
    });
    it("should return a status of 200 to the front end id the database is saved")

    it("should return a job with an id");
    it("should return an error if the database failed");
})