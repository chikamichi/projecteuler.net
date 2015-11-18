# Project Euler

Solving problems from [https://projecteuler.net](https://projecteuler.net).

## Install

1. Clone this project
2. `[sudo] npm install -g grunt-cli babel-node` (to install required global libraries)
3. `npm install` (to install libraries local to this project)

## Solve a problem

1. Write a script under `problems/{index}-{title}/index.js`
2. Run it using `grunt solve {index}`

Example: `grunt solve:1` will run `problems/0001-multiples-of-3-and-5/index.js`

You may use Mocha & Chai to write tests.

## Solved problems

* 1. [Multiples of 3 and 5](https://projecteuler.net/problem=1) ([solution](problems/0001-multiples-of-3-and-5/))
* 2. [Even Fibonacci numbers](https://projecteuler.net/problem=2) ([solution](problems/0002-even-fibonacci-numbers/))

---

## TODO

* `grunt solve:all` should run all the problems
