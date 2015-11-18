"use strict"

var shell = require('shelljs')

function trimNewLine(string) {
  return string.replace(/[\n\t\r]/g,"")
}

// Padding to four zeros: 1 => 0001, 45 => 0045, 999 => 0999, etc.
function padProblemIndex(num) {
  var s = num + ""
  while (s.length < 4) s = "0" + s
  return s
}

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt)

  grunt.initConfig({
    "pkg": grunt.file.readJSON('package.json')
  })

  // Running "grunt solve:1" will solve problem 0001, etc.
  grunt.registerTask('solve', 'Solve one or several problem(s)', function(index) {
    if (arguments.length == 0) {
      grunt.log.writeln(this.name + ": must provide a problem index.")
    } else {
      let pathMatch = shell.exec(`find problems -type d -name "${padProblemIndex(index)}-*"`, {silent: true})
      let path = trimNewLine(pathMatch.output)
      if (path) {
        grunt.log.writeln(`Solving ${path}`)
        shell.exec(`babel-node ${path}/index.js`)
      } else {
        grunt.log.writeln("No match found, aborting.")
      }
    }
  })

  // grunt.registerTask("default", ["solve"]);
}
