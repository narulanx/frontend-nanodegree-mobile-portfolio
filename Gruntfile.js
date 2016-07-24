module.exports = function(grunt) {

// var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 116,
            height: 75,
            suffix: '_small'
          }]
        },
        files: [{
          expand: true,
          src: ['pizzeria.jpg'],
          cwd: 'views/images/',
          dest: 'views/resized_images/'
        }]
      }
    },

    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'views/resized_images/',
          src: ['*.jpg'],
          dest: 'views/images/',
          ext: '.jpg'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'views/css',
          src: ['style.css'],
          dest: 'views/css',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'views/js/main.min.js': ['views/js/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify','cssmin','imagemin','responsive_images']);

};
