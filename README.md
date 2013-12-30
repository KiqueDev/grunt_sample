grunt_sample
============
A basic grunt sample code to join javascript or css files. In addition, we also minified them using grunt.js.  

-Install Node.js [http://nodejs.org/]  
-After installing node.js, you will be able to use "npm" in your console/terminal.  
-Install grunt using the command line "npm install -g grunt-cli" [http://gruntjs.com/]  

-Clone my files from git. "git clone https://github.com/KiqueDev/grunt_sample.git"  
-Go to directory grunt_sample. "cd grunt_sample"  
-Install all the dependecies from package.json. "npm install"  
-Run grunt.   "grunt"  

Modify the Gruntfile.js for your use.

It should create the following files. In css folder: complete.css and complete.min.css  
                                          js folder: complete.js and complete.min.js  

## HandleBars usage
>  var template = JST["src/templates/..hbs"];
>  var html = template({data:data});
>  $(selTarget).html(html);