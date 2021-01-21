console.log("Hello Word");

//let nome = prompt("Digite seu nome abaixo");
//console.log(nome);

let maiorDeIdade = confirm("Você confirma ter ao menos 18 anos?");

if(!maiorDeIdade){
    window.location.reload();
}