$(function() {

	$("#botao1").on("click", function(e) {
		console.log("Botão 1 clicado!");
	});

	$("#link1").on("click", function(e) {
		//evita que o comportamento padrão do link seja executado
		e.preventDefault();

		console.log("Link 1 clicado!");
	});

	$("#input1").on("keyup", function(e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			alert("Enter pressionado!");
		}
	});

});
