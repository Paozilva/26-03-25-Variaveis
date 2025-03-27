var nomeDaVariavel = "Valor da Variável"; 

let nomeDaVariavelTemporaria = "Valor Temporário da Variável";

const nomeDaVariavelSomenteLeitura = "Valor Somente leitura da Variável";

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2","vetor3", "vetor4", "vetor5",];

// console.log("matriz, vetor1:", matriz[0]);

for(let i = 0; i < matriz.length; i++) {
    console.log("matriz[" + i +"]:", matriz[i]);  // o i es un indexador que fornece a chave para o vector 
}

class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
        // this.parametroUm = "valor Um";
        // this.parametroDois = "Valor Dois";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois; // um parametro e uma propiedade!!!
    }
    metodoMostrarParametros(parametroUm, parametroDois) {
        // this.parametroUm = "valor 1";
        // this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm +" - " + this.parametroDois;

    }
}

const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros());

