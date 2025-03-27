var matrizDeFrutas = ["Banana", "Maçã", "Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString());

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã");

matrizDeFrutas.splice(indexadorDoVetor, 1);

console.log(matrizDeFrutas.toString());

matrizDeFrutas.splice(1,1,"Laranja"); //1,1=editar 1,0=adicionar

console.log(matrizDeFrutas.toString());