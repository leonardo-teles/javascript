var joao = {
	nome: "João",
	idade: 25,
	endereco: {
		logradouro: "Av.Brasil",
		numero: 100,
		complemento: "Apto 202",
		cidade: "Rio de Janeiro",
		estado: "RJ"
	}
};

//atribui as propriedades do objeto 'joao' à variável 'prop'
for (var prop in joao) {
	//verificando o nome da propriedade e seu valor
	console.log(prop, "->", joao[prop]);
}