$(function() {
	var atividade = $("#atividade");
	var listaAtividades = $("#lista-atividades");

	atividade.on("keyup", function(e) {
		var keyCode = e.keyCode;
		
		if (keyCode === 13) {
			//disparando o evento
			atividade.trigger("enter", atividade.val());
			
			//limpa o campo
			atividade.val("");
		}
	});

	atividade.on("enter", function(evento, texto) {
		listaAtividades.prepend("<li>" + texto + "</li>");
	});

	atividade.on("enter", function(evento, texto) {
		console.log("Outra funcionalidade aqui...");
	});

});