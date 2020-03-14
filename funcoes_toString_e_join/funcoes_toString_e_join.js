var carros = ["Fox", "Celta", "Gol"];

//o 'toString' mostra os elementos do array separados por vírgula e sem espaços
var c = carros.toString();
console.log(c);
console.log(typeof c);

//para mostrar de forma personalizada, o melhor é o 'join'
console.log(carros.join(" - "));