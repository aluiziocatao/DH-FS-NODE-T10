//criação de uma classe
class Quadrado {
    //criação de um método construtor
    constructor(ladoParam){
        //criação de um atributo
        this.lado = ladoParam;
    }
    //criação de um método
    calcularArea(){
        return this.lado * this.lado;
    }
}
let quadrado = new Quadrado(5);
console.log(quadrado.calcularArea());