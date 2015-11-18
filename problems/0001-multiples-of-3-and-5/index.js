// https://projecteuler.net/problem=1
// -----------------------------------------------------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// require("babel-core/register")
// require("babel-polyfill")

let expect = require('chai').expect

function* range(begin, end, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}

function sequence(from, to, interval) {
  let i, arr = []
  for (i of range(from, to, interval)) {
    arr.push(i)
  }
  return arr
  // The following syntax does not seem to be supported by babel-node yet.
  // return [ for (i of range(from, to, interval)) i ]
}

function solution(n) {
  return sequence(0, n).reduce((acc, i) => {
    return ((i % 3 === 0) || (i % 5 === 0)) ? acc + i : acc
  }, 0)
}

expect(solution(10), 'solution(10) gave bad result').to.equal(23)

console.log('Solution:', solution(1000))
