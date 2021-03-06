module.exports = function(grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      all: {
        files: ['data/**/*', 'test/**/*'],
        tasks: ['test']
      }
    },

    // Configuration to be run (and then tested).
    // Run mocha tests.
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {src: ['test/**/*.js'] }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['if.js', 'src/**/*.js', 'test/**/*.js']
    },

    // Clean test files before building or re-testing.
    clean: {
    }

  });

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('validate', ['jshint:all']);
  grunt.registerTask('test', ['simplemocha']);
  grunt.registerTask('dev', ['watch']);
};