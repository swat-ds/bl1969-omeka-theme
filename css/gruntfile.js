module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({

        compass:{
            dev:{
            options:{
                config:'config.rb'
            }
            }//dev
        },//compass
        watch:{
            options: { livereload: true },
            sass:{
                files: ['sass/*.scss'],
                tasks:['compass:dev']
            }//sass
        }//watch

    }); //initConfig
    grunt.registerTask('default','watch');
}
