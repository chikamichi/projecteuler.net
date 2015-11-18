# Project Euler

Solving problems from [https://projecteuler.net](https://projecteuler.net).

## Install

1. Clone this project
2. `npm install -g grunt-cli babel-node` (to install Grunt CLI and babel-node globally)
3. `npm install` (to install local libraries for this project)

## Solve a problem

1. Write a script under `problems/{index}-{title}/index.js`
2. Run it using `babel-node`

Example: `babel-node problems/0001-multiples-of-3-and-5/index.js`.

## Solved problems

*None yet!*

---

## TODO

* `grunt solve 1` should run the `babel-node` command for 0001, `grunt solve 456` for 0456, etc.
* `grunt solve all` should run all the problems

## Must read

* http://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined-with-async-await
