import { expect } from 'chai'
import { solution } from './index'

describe('Solution', () => {
  it('should return the correct result', () => {
    expect(solution(10), 'solution(10) gave bad result').to.equal(23)
  })
})
