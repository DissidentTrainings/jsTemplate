"use strict";

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lexicon: {
      all: {
        src: ["*.js"],
        dest: "docs",
        options: {
          title: "The Docs",
          format: "html"
        } 
      }
    },
    buster: {
      test: {
        config: './buster.js'
      },
      server: {
        port: 1111
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'jshint buster'
    },
    jshint: {
      all: ['Gruntfile.js', 'jsTemplate.js', 'tests/*.js'],
      options: {
        jshintrc: '.jshintrc'
      } 
    }
  });
  grunt.loadNpmTasks('grunt-lexicon');
  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task.
  grunt.registerTask('default', ['jshint', 'buster', 'lexicon']);
};
