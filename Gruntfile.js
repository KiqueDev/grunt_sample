module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				dest: "js/complete.js",
				src: ["src/js/*.js"]
			},
			css: {
				dest: "css/complete.css",
				src: ["src/css/*.css"]
			}
		},
		uglify: {
			options: {
      			mangle: true
    		},
			js: {
				src: 'js/complete.js',
				dest: 'js/complete.min.js'
			}
		},
		cssmin: {
			js: {
				src: 'css/complete.css',
				dest: 'css/complete.min.css'
			}
		}
	});

	// Load npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-css');

	// A very basic default task.
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}