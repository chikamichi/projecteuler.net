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

function findProblem(index) {
  let pathMatch = shell.exec(`find problems -type d -name "${padProblemIndex(index)}-*"`, {silent: true})
  return trimNewLine(pathMatch.output)
}

function findAllProblems() {
  let pathMatches = shell.exec('find problems -mindepth 1 -maxdepth 1 -type d', {silent: true})
  return pathMatches.output.split('\n').map((path) => { return trimNewLine(path) }).slice(0, -1)
}

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt)

  grunt.initConfig({
    "pkg": grunt.file.readJSON('package.json')
  })

  function solveProblem(index) {
    let path = findProblem(index)

    if (path) {
      solveProblemByPath(path)
    } else {
      grunt.log.writeln("That problem has not been solved yet!")
    }
  }

  function solveProblemByPath(path) {
    grunt.log.writeln("")
    grunt.log.writeln(`>>> Solving ${path}`)
    shell.exec(`babel-node ${path}/index.js`)
  }

  function solveAllProblems() {
    findAllProblems().map((path) => {
      solveProblemByPath(path)
    })
  }

  // Running "grunt solve:1" will solve problem 0001, etc.
  grunt.registerTask('solve', 'Solve one or several problem(s)', function(index) {
    if (arguments.length == 0) {
      return grunt.log.writeln(this.name + ": must provide a problem index.")
    }

    index == 'all' ? solveAllProblems() : solveProblem(index)
  })

  // grunt.registerTask("default", ["solve"]);
}
