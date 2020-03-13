//function declaration
function somar(a, b) {
	return a + b;
}

//function expression
var subtrair = function(a, b) {
	return a - b;
}

var soma = somar(2, 3);
console.log("2 + 3 =" ,soma)

var subtracao = subtrair(6, 2);
console.log("6 - 2 =", subtracao);

console.log("typeof subtrair", typeof subtrair);