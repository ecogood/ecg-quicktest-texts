'use strict';

var fs = require('fs');

/* the object to be exported */
var result = {
  langs: []
};

var dataDir = 'data/';
fs.readdir(dataDir, function(err, fileNames) {
  if (err) {
    throw err;
  }

  fileNames.forEach(function(fileName) {

    fs.readFile(dataDir + fileName, function(err, data) {
      if (err) {
        throw err;
      }

      var lang = fileName.slice(-7, -5);
      var json = JSON.parse(data);

      result.langs.push(lang);
      result[lang] = json;
    });
  });

});

module.exports = result;