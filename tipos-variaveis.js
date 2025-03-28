let valor = "Hello";
console.log(typeof valor);

valor = 10;
console.log(typeof valor);

valor = parseFloat(10.12);
console.log(typeof valor);

valor = valor != 0;
console.log(typeof valor);

valor = BigInt("987456321147895623212345678901234569870112");
console.log(typeof valor);

let varUndefined;
console.log(typeof varUndefined);

class Objeto{
        constructor (paramOne, paramTwo) {
        this.paramOne= paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo);
    }
}

const objeto = new Objeto("Só parâmetro 1");
console.log(typeof Objeto);

valor = document.getElementById("elementoInexistente");
console.log(typeof valor);

valor = ["vetor1","vetor2"];
console.log(typeof valor);

const date = new Date("2025-03-28");
console.log(typeof date);

console.log(date);



