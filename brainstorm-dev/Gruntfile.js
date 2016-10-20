module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'libdev/styles/main.min.css': 'src/styles/main.scss'
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'images/'
                }]
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results.txt',
                    quiet: false,
                    clearRequireCache: false,
                    noFail: false
                },
                src: ['test/**/*.js']
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'libdev/js/app.js': 'src/js/app.js'
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'index-haml.html': 'index.haml',
                    'profile-haml.html': 'profile.haml',
                    'game-haml.html': 'game.haml',
                    'leaderboard-haml.html': 'leaderboard.haml'
                }
            }
        },

        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            javascript: {
                files: [
                    'src/js/*.js', 'test/*.js'
                ],
                tasks: ['mochaTest', 'babel']
            },

            img: {
                files: ['images/**/*'],
                tasks: ['imagemin']
            },

            html: {
                files: ['index.haml', 'profile.haml', 'game.haml', 'leaderboard.haml'],
                tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'imagemin',
        'mochaTest',
        'babel',
        'haml'
    ]);
};
