// https://projecteuler.net/problem=1
// -----------------------------------------------------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// require("babel-core/register")
// require("babel-polyfill")

// --- My first solution ---

function* sequence(begin, end, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}

function range(from, to, interval) {
  let i, arr = []
  for (i of sequence(from, to, interval)) {
    arr.push(i)
  }
  return arr
  // The following syntax does not seem to be supported by babel-node yet.
  // return [for (i of range(from, to, interval)) i]
}

export function solution(n) {
  return range(0, n).reduce((acc, i) => {
    return ((i % 3 === 0) || (i % 5 === 0)) ? acc + i : acc
  }, 0)
}

// --- A smarter solution ---

// Integer division x/y, discarding the remainder.
function div(x, y) {
  return Math.floor(x/y)
}

function sumDivisibleBy(target, divider) {
  let p = div(target-1, divider)
  return div(p*(p+1), 2) * divider
}

export function solutionSmart(n) {
  return sumDivisibleBy(n, 3) + sumDivisibleBy(n, 5) - sumDivisibleBy(n, 3*5)
}

// --- Tests ---

import Mocha from 'mocha'
let mocha = new Mocha()
mocha.addFile(__dirname + '/test.js')
mocha.run(() => {

  // --- Solution ---

  console.log("Problem's solution:", solution(1000))
  console.log("Problem's solution (smarter computation):", solutionSmart(1000))
})
