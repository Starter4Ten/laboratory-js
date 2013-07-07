module.exports = function(grunt) {

  grunt.initConfig({

    jasmine: {
      pivotal: {
        src: ['src/feature.js', 'src/starter4ten-lab.js', 'src/laboratory.js', 'src/experiment.js', '!src/lib/*.js'],
        options: {
          vendor: ['src/lib/underscore-1.4.4.js', 'src/lib/backbone-1.0.0.js', 'src/lib/json2.js', 'src/lib/jquery-1.7.1.js'],
          specs: 'test/specs/*_spec.js',
          keepRunner: true,
          outfile: 'test/_SpecRunner.html'
        }
      }
    }

  });

  grunt.registerTask('default', 'jasmine');

  grunt.loadNpmTasks('grunt-contrib-jasmine');

};