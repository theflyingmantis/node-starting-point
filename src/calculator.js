function sum(a, b) {
  return a + b;
}

function subtract(a,b){
  return a-b;
}

function divide(a,b)
{
	if(b===0)
		return "BAD_INPUT";
	return a/b;
}

function multiplication(a,b)
{
	return a*b;
}

module.exports = {
  sum: sum ,
  sub: subtract,
  div: divide,
  mul: multiplication
}


/*exports.sum = function (a, b) {
  return a + b;
}*/
// exports.sum = (a, b) => a + b;
