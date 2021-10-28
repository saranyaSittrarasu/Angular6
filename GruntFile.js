module.exports = function (grunt) {
    //load task
    grunt.loadNpmTasks('grunt-shell');
    //initialise the configuration of grunt
    grunt.initConfig({
        config:grunt.file.readJSON('appsettings.json'),
        shell: {
            command: ["cd <%= config.angulardir %>",
                "ng build --deploy-url=/CustomerApp/dist/CustomerApp/ --watch"].join('&&')
        }
    })
    
    //default task to execute
    grunt.registerTask('ngbuild', ['shell']);
}