class Imc{
    constructor(pesoParam, alturaParam){
        this.peso = pesoParam;
        this.altura = alturaParam;
    }

    massaCorporal(){
        return this.peso / (this.altura * this.altura)
    }

    situacaoPeso(){
        let massaCorporal = this.massaCorporal();

        if(massaCorporal < 18.5){
            return ("Abaixo do peso")
        }else if(massaCorporal >= 18.5 && massaCorporal < 24.9){
            return ("Está no peso ideal")
        }else{
            return ("Está acima do peso")
        }
    }
}

let imc = new Imc(60, 1.65);
console.log(imc.massaCorporal());
console.log(imc.situacaoPeso());
//Abaixo do peso, quando o resultado é menor que 18,5 kg/m2;
//Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//Acima do peso, quando o resultado está entre 24,9 e 30 kg/m2;

