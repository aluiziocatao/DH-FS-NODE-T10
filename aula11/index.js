const express = require('express')

//Criando aplicação Express
const app = express();
const port = 3000;

// importando rotas da aplicacao
const routes = require('./routes')

app.use(routes)

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`)
})