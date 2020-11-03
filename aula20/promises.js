const { rejects } = require("assert");
const { resolve } = require("path");

const advinhaMelhorCurso  = (curso) => {
    return new Promise((resolve, reject) => {
        if (curso = "Full Stack") {
            resolve({
                success: true,
                nomeDoCurso: curso,
                mensagem: "O curso " + curso + " realmente é o mais legal da DH"
            })
        } else {
            reject({
                success: false,
                mensagem: "Que pena, você não advinhou o melhor curso"
            })
        }
    });
}

const melhoresMateriasDoMelhorCurso = (resposta) => {
    return Promise((resolve, reject) => {
        if (resposta.success) {
            objeto: resposta,
            resolve("As matérias mais legais do curso " + resposta.nomeDoCurso + " são API e React")
        } else {
            reject("Não temos matérias para listar do curso " + resposta.nomeDoCurso)
        }
    });
}


let objeto = advinhaMelhorCurso("Full Stack")
    .then(resposta => {
        console.log(resposta)
        return melhoresMateriasDoMelhorCurso(resposta)
    })

    .then(respostaDoMetodoMelhoresMateriasDoMelhorCurso => {
        console.log(respostaDoMetodoMelhoresMateriasDoMelhorCurso)
    })

    .catch(error => {
        console.log(error)
    })

    objeto.then(resposta => {
        console.log(resposta)
    })
