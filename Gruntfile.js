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
    },
    copy: {
      lib: {
        expand: true,
        src: [
          'node_modules/es6-shim/es6-shim.min.js',
          'node_modules/systemjs/dist/system-polyfills.js',
          'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
          'node_modules/angular2/bundles/angular2-polyfills.js',
          'node_modules/systemjs/dist/system.src.js',
          'node_modules/rxjs/bundles/Rx.js',
          'node_modules/angular2/bundles/angular2.dev.js',
          'node_modules/angular2/bundles/router.dev.js'],
        dest: 'lib/',
        flatten: true
      }
    },
    ts: {
      options: {
        'compiler': './node_modules/typescript/bin/tsc'
      },
      default: {
        tsconfig: {
          passThrough : true
        }
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
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Starts the tsc compiler in watch mode
  // and fires up the lite-server.
  grunt.registerTask('start', ['concurrent:start']);
  
  grunt.registerTask('tsc', ['shell:tsc']);
  
  grunt.registerTask('lib', ['copy:lib']);
};
