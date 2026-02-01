import { describe, it, expect } from 'vitest'
import { getSum } from '../sum'

describe('getSum', () => {
  it('should return the sum of two numbers', () => {
    expect(getSum(1, 2)).toBe(3)
  })

  it('should work with negative numbers', () => {
    expect(getSum(-1, 1)).toBe(0)
    expect(getSum(-1, -2)).toBe(-3)
  })
})
