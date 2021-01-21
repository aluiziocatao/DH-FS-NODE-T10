//verificando se o arquivo foi linkado
// let nome = prompt("Digite seu nome?")
// console.log("Bem vindo, "+nome)

// let confirmacao = confirm("Você é maior de idade ?");
// if (confirmacao === false){
//     window.location.reload(false)
// }

// document.getElementsByClassName('nav-item').cabecalho.style.backgroundColor = "white"


// AULA 02

let logo = document.querySelector('.logo')

logo.addEventListener("mouseover",function(){

    logo.style.transform = 'rotate(180deg)';
});

logo.addEventListener("mouseout",function(){

    logo.style.transform = 'rotate(-0deg)';
});

//Aula 03

let nome = document.querySelector('#input-nome');
let email = document.querySelector('#input-email');
let mensagem = document.querySelector('#textarea-mensagem');
let camposFormulario = document.querySelector('form').elements
let form = document.querySelector('#form-contato')
let invalidFeedbacks = document.querySelectorAll('.invalid-feedback')


for (let i = 0; i < camposFormulario.length; i++) {
    camposFormulario[i].addEventListener('focus', function(){
        this.style.backgroundColor = "#eee";
    });

    camposFormulario[i].addEventListener('blur', function(){
        this.style.backgroundColor = "#fff";
    });
    
}


// function focusBlur (item){
//     item.addEventListener("focus", function(){
//         item.style.backgroundColor = "#eee";
//     });

//     item.addEventListener("blur", function(){
//         item.style.backgroundColor = "#fff";
//     });
// }

// focusBlur(nome);
// focusBlur(email);
// focusBlur(mensagem);

// nome.addEventListener("target", function(){
//     this.style.backgroundColor = "#eee";
// })

// nome.addEventListener("blur", function(){
//     this.style.backgroundColor = ""
// })

// email.addEventListener("focus", function(){
//     this.style.backgroundColor = "#eee";
// })

// email.addEventListener("blur", function(){
//     this.style.backgroundColor = ""
// })

// mensagem.addEventListener("focus", function(){
//     this.style.backgroundColor = "#eee";
// })

// mensagem.addEventListener("blur", function(){
//     this.style.backgroundColor = ""
// })

form.addEventListener('submit',function(event){
    event.preventDefault();

    if (nome.value === ''){
        nome.classList.add('is-invalid');
        invalidFeedbacks[0].innerHTML = 'Preenchimento obrigatório'
    }

    if (email.value === ''){
        email.classList.add('is-invalid');
        invalidFeedbacks[1].innerHTML = 'Preenchimento obrigatório'
    }

    if (mensagem.value === ''){
        mensagem.classList.add('is-invalid')
        invalidFeedbacks[2].innerHTML = 'Preenchimento obrigatório'

    }
})