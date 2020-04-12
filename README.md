# Userscript Development Environment
This is a userscript development environment set up with browserify and minifyify and it includes Babel as well. It uses grunt.

I use this environment in my userscript project MMDF/lnmtl-alternative-translations.

## How to Use?
Work inside src/ and run `grunt browserify` to build. 

To change the userscript meta, modify the banner constant inside `Gruntfile.js`.

## Development Environment
For watching the files and automatically building, run `grunt watch`.

For automatic reloading of your userscript (tested in Tampermonkey):

Make a file with only your banner and a line like this (as in userscript.dev.js in this repository) where `path/to/here` is your project directory:

`
// @require      file://path/to/here/dist/userscript.dev.js
`

Then import this file into Tampermonkey(or other userscript extension). This "userscript" will update whenever your build updates. However, keep in mind that Tampermonkey requires you to reload twice before changes apply (This is how required scripts are implemented, so not much you can do about it.)

You could also try writing a meta.js build task but Tampermonkey extension updating was always buggy for me, and you would have to increment build number every time you make any changes, so that's another trade-off.

That's about it. Have fun developing your userscript with the latest ECMAScript features and don't hesitate to create new issues if you have any.