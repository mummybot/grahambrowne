module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'wp-content/themes/grahambrowne/js/**/*.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    less: {
            development: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "./style.css": "./less/style.less"
                }
            }
        },
    watch: {
      options: {
        livereload: true
      },
      reload: {
        files: ['**/*.html', './js/**/*.js', '**/*.css', '**/*.{png,jpg}'],
        tasks: 'tinylr-reload'
      },
      less: {
        files: "./less/*",
        tasks: ["less"]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('tiny-lr');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('reload', ['tinylr-start', 'watch']);

};