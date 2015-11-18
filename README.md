# Project Euler

Solving problems from [https://projecteuler.net](https://projecteuler.net) using
ECMAScript 6.

![ProjectEuler badge](https://projecteuler.net/profile/chikamichi.png)

***Disclaimer***: ProjectEuler's spirit is to have participants solve problems on
their own. Looking for mathematical or programming insights is just fine, but
reaching to fully-fledged solutions breaks the game. If you plan on solving some
problems available in this repository, I'd encourage you *not* to look at them.

## Installing the project

1. Clone this project
2. `[sudo] npm install -g grunt-cli babel-node` (to install required global libraries)
3. `npm install` (to install libraries local to this project)

## Solving a problem

1. Write a script under `problems/{index}-{title}/index.js`
2. Run it using `grunt solve {index}`

Example: `grunt solve:1` will run `problems/0001-multiples-of-3-and-5/index.js`

You may use Mocha & Chai to write tests.

## Solved problems, in order

1. [Multiples of 3 and 5](https://projecteuler.net/problem=1) (#1) ([solution](problems/0001-multiples-of-3-and-5/))
2. [Even Fibonacci numbers](https://projecteuler.net/problem=2) (#2) ([solution](problems/0002-even-fibonacci-numbers/))

## TODO

* `grunt solve:all` should run all the problems
