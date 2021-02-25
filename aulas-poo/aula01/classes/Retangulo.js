//Desafio 1 da Aula 01 de Programação Orientada a Objetos 
//Ínicio do Código
class Retangulo {
    constructor(baseParam, alturaParam){
        this.base = baseParam;
        this.altura = alturaParam;
    }
    calcularAreaRetangulo(){
        return this.base * this.altura;
    }
}
let retangulo = new Retangulo(5, 3);
console.log(retangulo.calcularAreaRetangulo());
//Fim do Código