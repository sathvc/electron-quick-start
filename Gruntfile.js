module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        less : {
            dist : {
                options : {
                    compress : true
                },
                files : {
                    "css/style.css" : "css/style.less"
                }
            }
        },

        watch : {
            less : {
                files : [
                    "css/*.less"
                ],
                tasks : [
                    "less:dist"
                ]
            }
        }

    });

    grunt.registerTask('default', ['less:dist','watch']);

};
