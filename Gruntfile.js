module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-conventional-changelog');

    grunt.initConfig({
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false
            }
        }
    });

    grunt.registerTask('update', [
        'bump-only:patch',
        'changelog',
        'bump-commit'
    ]);

    grunt.registerTask('update:minor', [
        'bump-only:minor',
        'changelog',
        'bump-commit'
    ]);

    grunt.registerTask('update:major', [
        'bump-only:major',
        'changelog',
        'bump-commit'
    ]);
};
