'use strict';

var expect = require('chai').expect;
var data = require('../index');
var fs = require('fs');

describe('Data Files', function() {

  it('should have correct file names', function() {

    var dataDir = 'data/';
    fs.readdir(dataDir, function(err, fileNames) {
      if (err) {
        throw err;
      }
      for (var i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        expect(fileName.slice(-5)).to.equal('.json');
      }
    });

  });

});

describe('Module', function() {

  var langs = [];

  beforeEach(function() {
    Object.keys(data).forEach(function(dataKey) {
      if (dataKey !== 'langs') {
        var lang = data[dataKey];
        langs.push(lang);
      }
    });
  });

  it('should contain data', function() {
    expect(data).to.exist;
  });

  it('should contain German texts', function() {
    expect(data.de).to.exist;
  });

  it('should have matrix version 4.1', function() {
    langs.forEach(function(lang){
      expect(lang.matrixVersion).to.equal('4.1');
    });
  });

  it('should have correct structure.participants.type', function() {
    langs.forEach(function(lang){
      var participants = lang.structure.participants;
      participants.forEach(function(participant){
        expect(['company', 'self-employed']).to.include(participant.type);
      });
    });
  });

  it('should have correct structure.individualAnswer.evaluationValues.value', function() {
    langs.forEach(function(lang){
      var evaluationValues = lang.structure.individualAnswer.evaluationValues;
      for (var i = 0; i < evaluationValues.length; i++) {
        var evaluationValue = evaluationValues[i];
        expect(evaluationValue.value).to.equal(i);
      }
    });
  });

  it('should have correct structure.result.feedback.level', function() {
    langs.forEach(function(lang){
      var feedbacks = lang.structure.result.feedback;
      for (var i = 0; i < feedbacks.length; i++) {
        var feedback = feedbacks[i];
        if (i === 0) {
          expect(feedback.level).to.equal(0);
        } else if (i === 1) {
          expect(feedback.level).to.equal(1);
        } else if (i === 2) {
          expect(feedback.level).to.equal(2);
        } else if (i === 3) {
          expect(feedback.level).to.equal(3);
        }
      }
    });
  });

  it('should have correct test.questions.stakeholders/ecgValue', function() {
    langs.forEach(function(lang){
      var questions = lang.test.questions;
      for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        expect(['A', 'B', 'C', 'D', 'E']).to.include(question.stakeholders);
        expect(['1', '2', '3', '4', '5']).to.include(question.ecgValue);
      }
    });
  });

  it('should contain 27 questions', function() {
    langs.forEach(function(lang){
      var questions = lang.test.questions;
      expect(questions.length).to.equal(27);
    });
  });

});
