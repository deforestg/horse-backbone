module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint'); // load lint

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                ignores: [
                    'public/js/jquery-1.9.1.min.js'
                ]
            },
            uses_defaults: [
                'app/*.js',
                'app/**/*.js'
            ]
        },//lint
        watch: {
            app: {
                files: ['app/**/*.js', 'app/*.js'],
                tasks: ['concat:app']
            },
            templates: {
                files: ['app/templates/*.html', 'app/templates/**/*.html'],
                tasks: ['concat:templates']
            }
        },
        concat: {
            app: {
                options: {
                    process: function(src, filepath) {
                        return '//####' + filepath + '\n' + src;
                    }
                },
                src: ['app/lib/underscore.js', 'app/lib/backbone.js', 'app/*.js', 'app/**/*.js'],
                dest: 'public/js/app.js'
            },
            templates: {
                src: ['app/templates/*.html', 'app/templates/**/*.html'],
                dest: 'public/templates.html'
            }
        },
        uglify: {
            options: {
                mangle: false //preserve variable and function names
            },
            target: {
                src: '<%= concat.app.dest %>',
                dest: '<%= concat.app.dest %>'
            }
        },
        clean: {
            js: ['public/js/app.js']
        }
    });//initConfig

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');

// CLI COMMANDS
    grunt.registerTask('default', ['app', 'templates', 'watch']);
    grunt.registerTask('app', ['concat:app']);
    grunt.registerTask('templates', ['concat:templates']);

    grunt.registerTask('hint', ['jshint']);

    //Production
    grunt.registerTask('prod', ['concat:app', 'uglify']);
};
