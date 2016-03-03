module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      lite: {
        command: 'npm run lite'
      },
      tscWatcher: {
        command: 'npm run tsc:w'
      }
    },
    concurrent: {
      start: ['shell:tscWatcher', 'shell:lite']
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');

  // Starts the tsc compiler in watch mode
  // and fires up the lite-server.
  grunt.registerTask('start', ['concurrent:start']);
};
