const express = require('express')

//Criando aplicação Express
const app = express();
const port = 3000;

//Servidor utilizando Express
app.get('/', (req, res) => {
  let array = ['item 1', 'item 2', 'item 3']
  let arrayDeObjetos = [
    {
      "nome": "Aluízio"
    },
    {
      "nome": "José"
    }
  ]
  res.send(arrayDeObjetos)
})

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`)
})

//Node--> Possibilitar da gente conseguir trabalhar com JS no lado
//do servidor mais conhecido como backend, ou seja, 
//trabalhar com JS no backend

//Express --> é um módulo que implementa diversas bibliotecas
//ou pacotes para funcionar.