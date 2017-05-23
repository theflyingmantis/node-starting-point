function sum(a, b) {
  return a + b;
}

function subtract(a,b){
  return a-b;
}

function divide(a,b)
{
	var result=a/b;
	if (isNaN(result))
		return "Nan_found";
	if (!isFinite(result))
		return "Infinity_found";
	return result;
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
