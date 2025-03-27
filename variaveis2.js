class IceCreamFrambuesas {
    constructor (frambuesas, leite, azucar, limao, sabor, cor, cheiro, biscoito, amendoim, chocolate) {
        this.frambuesas = frambuesas;
        this.leite = leite;
        this.azucar = azucar;
        this.limao = limao;
        this.sabor = sabor;
        this.cor = cor;
        this.cheiro = cheiro;
        this.biscoito = biscoito;
        this.amendoim = amendoim;
        this.chocolate = chocolate;
    }

    metodoMostrarParametros (frambuesas, leite, azucar, limao, sabor, cor, cheiro, biscoito, amendoim, chocolate) {
        this.frambuesas = frambuesas;
        this.leite = leite;
        this.azucar = azucar;
        this.limao = limao;
        this.sabor = sabor;
        this.cor = cor;
        this.cheiro = cheiro;
        this.biscoito = biscoito;
        this.amendoim = amendoim;
        this.chocolate = chocolate;
        return  frambuesas +
        " - " + 
        leite +
        " - " +
        azucar +
        " - " +
        limao +
        " - " +
        sabor+
        " - " +
        cor +
        " - " +
        cheiro +
        " - " +
        biscoito +
        " - " +
        amendoim +
        " - " +
        chocolate;
       

    }
}
const iceCreamFrambuesas = new IceCreamFrambuesas();
console.log(iceCreamFrambuesas.metodoMostrarParametros("frambuesas" , "leite" , "azucar" , "limao" , "sabor" , "cor" , "cheiro", "biscoito", "amendoim", "chocolate"));

const parametro = [
    {id: 0, value: "frambuesa", char: "a" },
    {id: 1, value: "leite", char: "b" },
    {id: 2, value: "azucar", char: "c" },
    {id: 3, value: "limao", char: "d" },
    {id: 4, value: "sabor", char: "e" },
    {id: 5, value: "cor", char: "f" },
    {id: 6, value: "cheiro", char: "g" },
    {id: 7, value: "biscoito", char: "h" },
    {id: 8, value: "amendoim", char: "i" },
    {id: 9, value: "frambuesa", char: "j" },

];
class IceCreamFrambuesas {
    constructor (a, b, c, d, e, f, g, h, j) {
        for (let i = 0; i < parametro.length; i++) {
            if(typeof arguments[i] != "undefined") {
                Object.defineProperty(this, parametro[i].value,
                {value: arguments[i]});
                if (arguments[i].trim().length > 0){

                }
            }
        }
    }

}
