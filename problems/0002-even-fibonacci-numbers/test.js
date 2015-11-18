import { expect } from 'chai'
import { fibonacci, solution } from './index'

describe('fibonacci', () => {
  it('should return the correct sequence for n=10', () => {
    let [...first10] = fibonacci(10)
    expect(first10).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('should allow a filtering callback to be passed', () => {
    let onlyEven = function(value) { return value % 2 == 0 }
    let [...first10even] = fibonacci(10, onlyEven)
    expect(first10even).to.eql([0, 2, 8, 34])
  })

  it('should allow iterating without an upper limit', () => {
    let fibseq = fibonacci()
    expect(fibseq.next().value).to.equal(0)
    expect(fibseq.next().value).to.equal(1)
    expect(fibseq.next().value).to.equal(1)
    let next = fibseq.next()
    expect(next.value).to.equal(2)
    expect(next.done).to.eql(false)
  })
})

describe('solution', () => {
  it('should compute the correct sum for max=50', () => {
    expect(solution(50)).to.equal(44)
  })
})
