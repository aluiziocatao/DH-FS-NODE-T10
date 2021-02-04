let form = document.querySelector('form');
let nome = document.querySelector('input[name="nome"]');
let email = document.querySelector('input[name="email"]');
let mensagem = document.querySelector('input[name="mensagem"]');
let marketing = document.querySelector('input[name="marketing"]:checked');
let newsletter = document.querySelector('input[name="newsletter"]');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {
        "nome": nome.value,
        "email": nome.emailz,
        "mensagem": nome.mensagem,
        "marketing": nome.marketing,
        "newsletter": nome.newsletter,
    }
    
    // transformando em array para adicionar item
    let contato = JSON.parse(localStorage.getItem('contatos')) || [];
    
    // adicionando item dentro do array
    contatos.push(data)
    
    // enviando o array com novo item para localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos))

    const exibeMensagem = () => {
        let mensagem = document.querySelector('.message-contact');

        mensagem.classList.remove('d-none');

        setTimeout(() => {
            mensagem.classList.add('d-none');
        }, 1500)
    }

});