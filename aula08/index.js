const json = require('./json')
const {
      listarPets, 
      validaDados, 
      cadastrarPet, 
      vacinadosOrlando,
      servicosPrestados,
      darBanhoNoPet,
      tosarPet,
      cadastrarPetsDoJsonSpreadOperator,
      filtraPetPorNome,
      removerPet,
      atualizaPet
        } = require('./funcoes-pet')
const {calcular, soma, subtrai, divide, multiplica} = require('./calculadora')

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];
//Função Para listar Pets
// listarPets(pets)

let objPetTeste = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

//Função para cadastrar Pet
// cadastrarPet(objPetTeste)

// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
// que está na linha 86
let objPet = {
  nome: 'Novo Pet',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

let objPet2 = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

// essas chamadas as funções abaixo servem para executarmos as mesmas e estão comentadas, mas, 
// para conseguirem executar é só tirar o comentário de cada uma delas.
// cadastrarPet(objPet)
// cadastrarPet(objPet2)

// listarPets()
// adicionarPetDoVitao('Victor', 'desconhecido', 'desconhecido', 25, 'desconhecido')

 let objPetOrlando = {
  nome: "n3",
  tipo: "t3",
  raca: "vira",
  idade: 7,
  genero: "Macho",      
  vacinado: true
}

// desafio cumprido utilizando metodo do nosso colega Orlando que tem o propósito de retornar
// a quantidade e o nome de cada pet vacinado e também não vacinado em apenas uma função

// naoVacinados(pets)
// vacinados(pets)

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))

// console.log(filtraPetPorNome(pets, 'Yoshi'))

// removerPet(pets, 1)

let objetoPetAtualizado = {
  nome: "Atualizando Nome",
  tipo: "Atualizando Tipo",
  raca: "siames",
  idade: 3,
  genero: "Fêmea",      
  vacinado: false
}
// atualizaPet(pets, 2, objetoPetAtualizado)

//Testando funções da calculadora
//calcular(10, 5, soma)
