// gosto de programa em VBArray
// VBA => JS
// gosto de programar em JS
function trocarPalavraDaFrase (frase, busca, substituicao){
    return frase.replace(busca, substituicao)
}  

const trocarPalavraDaFraseArrowFunction = (frase, busca, substituicao) => 
    frase.replace(busca, substituicao)

const trocarTodasPalavrasDaFrase = (frase, busca, substituicao) => 
    frase.split(busca).join(substituicao)

// resolvendo com function normal sem seguir o padrão ES6 e utilizando arrow function
// console.log(trocarPalavraDaFrase('Gosto de programar em VBA, pois VBA é legal', 'VBA', 'JS'))


// resolvendo com padrão ES6 e utilizando arrow function
// console.log(trocarPalavraDaFraseArrowFunction('Gosto de programar em VBA, pois VBA é legal', 'VBA', 'JS'))

// resolvendo de forma que altere todas as palavras iguais que encontrar com padrão ES6 e utilizando arrow function
console.log(trocarTodasPalavrasDaFrase('Gosto de programar em VBA, pois VBA é legal', 'VBA', 'JS'))