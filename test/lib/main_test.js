const fib = require('../../lib/index');
const expect = require('expect');

describe('fibonacci sequence', function() {
  it('returns the sum of the previous two elements', function() {
    expect(fib(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])
  })
})
