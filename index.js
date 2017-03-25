var Calculator = require('./src/calculator');

(() => {
  var operation = process.argv[3];
  var operand1 = Number(process.argv[2]);
  var operand2 = Number(process.argv[4]);
  // [,,operand1,operation,operand2] = process.argv
  switch(operation){
    case '+':
    // console.log(Calculator.sum(+operand1, +operand2));
    console.log(Calculator.sum(operand1, operand2));
    break;
    default:
    console.log('Invalid operation!');
  }
})();
