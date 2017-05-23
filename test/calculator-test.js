var assert = require('assert');
var Calculator = require('../src/calculator');
describe('Calculator', function() {
  
  describe('sum', function() {
    it('should return 2 when inputs are 1,1', function() {
      assert.equal(2, Calculator.sum(1,1));
    });
  });

  describe('subtract',function(){
    it('should return 1 when inputs are 2,1',function(){
    	assert.equal(1,Calculator.sub(2,1));
    });
  });

  describe('divide',function(){
  	it('should return 4 when inputs are 8,2',function(){
  		assert.equal(4,Calculator.div(8,2));
  	});
  	it('should return error when inputs are 4,0',function(){
  		assert.equal('BAD_INPUT',Calculator.div(4,0));
  	});
  });

  describe('multiplication',function(){
  	it('should return 6 when inputs are 3,2',function(){
  		assert.equal(6,Calculator.mul(3,2));
  	});
  });

});
