"use strict";

var expect = require('chai').expect;
var data = require('../index');
var fs = require('fs');

describe('Data Files', function() {

  it('should have correct file names', function() {

    var dataDir = "data/";
    fs.readdir(dataDir, function(err, fileNames) {
      if (err) throw err;
      for (var i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        expect(fileName.slice(-5)).to.equal('.json');
      }
    });

  });
});

describe('Result Object', function() {

  it('should contain language data', function() {
    expect(data).to.exist;
    expect(data.de).to.exist;
    expect(data.en).to.exist;
  });

  it('should contain 27 questions', function() {
    expect(data.de.test.questions.length).to.equal(27);
    expect(data.en.test.questions.length).to.equal(27);
  });

});