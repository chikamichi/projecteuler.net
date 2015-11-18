import { expect } from 'chai'
import { solution, solutionSmart } from './index'

describe('Solution', () => {
  it('should return the correct result for n=10', () => {
    expect(solution(10), 'solution(10) gave bad result').to.equal(23)
  })
})

describe('Solution - smarter computation', () => {
  it('should return the correct result for n=10', () => {
    expect(solutionSmart(10), 'solutionSmart(10) gave bad result').to.equal(23)
  })
})
