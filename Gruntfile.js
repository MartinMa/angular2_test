module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      lite: {
        command: 'npm run lite'
      },
      tsc: {
        command: 'npm run tsc'
      },
      tscWatcher: {
        command: 'npm run tsc:w'
      }
    },
    concurrent: {
      start: ['shell:tscWatcher', 'shell:lite'],
      options: {
				logConcurrentOutput: true
			}
    }
    /*ts: {
      default : {
        tsconfig: true
      }
    }*/
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');
  //grunt.loadNpmTasks("grunt-ts");

  // Starts the tsc compiler in watch mode
  // and fires up the lite-server.
  grunt.registerTask('start', ['concurrent:start']);
  
  grunt.registerTask('tsc', ['shell:tsc']);
};
