var volks = {
	fabricante: "VW"
}

var fox = {
	nome: "Fox",
	placa: "AAA-1111",
	fabricante: "GM"
}

//undefined neste momento
console.log("Fox.fabricante:", fox.fabricante);

//seta o protótipo de volks em fox
Object.setPrototypeOf(fox, volks);

//prototype setado
console.log("Fox.fabricante:", fox.fabricante); // "GM"

//só exibe os atributos do próprio objeto, não os herdados
console.log("Fox", fox);

delete fox.fabricante
console.log("Fox.fabricante ->", fox.fabricante); // "VW"
console.log("Fox", fox);

//navegando em todas as propriedades dos objetos
for(propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}