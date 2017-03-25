var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {
  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });
});
