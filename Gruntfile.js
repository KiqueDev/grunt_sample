module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		handlebars:{
	    compile: {
	    	files: {
	    		"results/complete.hbs.js": "src/templates/*.hbs"
	    	}
	    }
		},
		uglify: {
			my_target: {
				files: {
					"results/complete.min.js": "src/js/*.js"
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					"results/complete.min.css": "src/css/*.css"
				}
			}
		}
	});

	// Load npm tasks
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	// A very basic default task.
	grunt.registerTask("default", ["handlebars", "uglify", "cssmin"]);
}