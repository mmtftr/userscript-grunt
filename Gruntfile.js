const banner = `// ==UserScript==
// @name         Your Userscript Name
// @namespace    namespace
// @version      0.1
// @description  Aims to conquer the world!
// @author       yourname
// @license      MIT
// ==/UserScript==
`;
const filename = "userscript";
module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        browserify: {
            production: {
                src: "src/**/*.js",
                dest: `./dist/${filename}.user.js`,
                options: {
                    banner,
                    browserifyOptions: { debug: false },
                    transform: [
                        [
                            "babelify",
                            {
                                presets: ["@babel/preset-env"],
                                plugins: [
                                    "@babel/plugin-proposal-class-properties",
                                ],
                            },
                        ],
                    ],
                    plugin: [["minifyify", { map: false }]],
                },
            },
            development: {
                src: "src/**/*.js",
                dest: `./dist/${filename}.dev.js`, // Unminified and source-mapped file
                options: {
                    banner,
                    browserifyOptions: { debug: true },
                    transform: [
                        [
                            "babelify",
                            {
                                presets: ["@babel/preset-env"],
                                plugins: [
                                    "@babel/plugin-proposal-class-properties",
                                ],
                            },
                        ],
                    ],
                },
            },
        },
        watch: {
            options: {
                atBegin: true,
            },
            files: "src/**/*.js",
            tasks: ["browserify:development"],
        },
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["browserify"]);
};
