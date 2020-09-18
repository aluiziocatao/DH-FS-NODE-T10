const express = require('express')
// const http = require('http')

// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.end('Servidor Rodando')  
// }).listen(3000, () => {
//   console.log('Servidor está rodando na porta 3000')
// })

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Olá você está na rota Home.')
})

app.get('/users', (req, res) => {
  res.send('Olá você está na lista de usuários.')
})

app.listen(port, () => {
  console.log(`O Servidor está rodando na porta ${port}`)
})
