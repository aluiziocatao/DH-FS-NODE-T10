const json = require('./json')

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

// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets

// const listarPets = () => {
//   for (let i = 0; i < pets.length; i++) {
//     console.log("Nome: " + pets[i].nome)
//     console.log("Tipo: " + pets[i].tipo)
//   }
// }
// listarPets()

// const listarPets = () => {
//     pets.forEach(function(pet){
//         console.log('Nome: ' + pet.nome);
//         console.log('Tipo: ' + pet.tipo);
//     })
// }

const listarPets = () => {
    pets.forEach((pet) => {
        console.log('Nome: ' + pet.nome);
        console.log('Tipo: ' + pet.tipo);
    })
}

// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
const validaDados = (novoPet) => {
  return (
    //   novoPet.id &&
      novoPet.nome && 
      novoPet.tipo && 
      novoPet.raca && 
      novoPet.idade && 
      novoPet.genero && 
      typeof novoPet.vacinado == "boolean"
      )
}

// criando função de cadastrar um novo pet dentro da nossa lista de pets que nada mais é que a variável pets
// que é o nosso array de objetos, ou seja, essa função tem propósito de adicionar um objeto contendo todas
// as propriedades válidas (nome, tipo, raca, idade e genero) para que tenhamos um novo elemento/pet dentro 
// da nossa lista de pets
const cadastrarPet = (objetoPet) => {
  if(typeof objetoPet == "object"){
    if(validaDados(objetoPet)){
      objetoPet.id = pets.length + 1;
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto não tem todas propriedades necessárias informadas")
    }
  } else { 
    console.log("Insira um objeto válido")
  }
}

// funcao que nosso colega Vitor Silvestre mostrou,  que é meio que uma segunda forma de fazer a funcao de 
// cadastrarPet que temos acima, porém, esta função invés de receber um objeto, ela tem como propósito 
// receber 5 parâmetros para tratá-los e criar um objeto a partir dos mesmos, sendo assim, iremos 
// ter o mesmo propósito de adicionar um elemento/pet dentro da nossa variável pets que é nosso array de objetos
const adicionarPetDoVitao = (nome, tipo, raca, idade, genero) => {
  let novoPet = {
      nome: nome,
      tipo: tipo,
      raca: raca,
      idade: idade,
      genero: genero
  }
  pets.push(novoPet);
  console.log(pets)
}

// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
// que está na linha 86
let objPet = {
  id: pets.length,
  nome: 'Novo Pet',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

// essas chamadas as funções abaixo servem para executarmos as mesmas e estão comentadas, mas, 
// para conseguirem executar é só tirar o comentário de cada uma delas.
cadastrarPet(objPet)
cadastrarPet(objPet)
// listarPets()
// adicionarPetDoVitao('Victor', 'desconhecido', 'desconhecido', 25, 'desconhecido')

const calcular = (numero1, numero2, operacao) => {
    operacao(numero1, numero2)
    console.log("A operação foi realizada com sucesso")
}

const soma = (numero1, numero2) => {
    console.log(numero1 + numero2)
}

// calcular(10, 5, soma)

const servicosPrestados = (pet, servico) => {
    servico(pet)
}

const darBanhoNoPet = (pet) => {
    let dataDoServico = new Date()
    dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
    pet.servicos.push("Serviço de banho realizado em " + dataDoServico)
    console.log("O Pet " + pet.nome + " tomou banho")
}


const tosarPet = (pet) => {
    let dataDoServico = new Date()
    dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
    pet.servicos.push("Serviço de tosa realizado em " + dataDoServico)
    console.log("O Pet " + pet.nome + " foi tosado")
}

//servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// console.log(json)

const cadastrarPetDoJsonSpredOperator = (lista, json) => { 
  let arrayPets = JSON.parse(json)   
  list.push(...arrayPets);
  return lista
  
}
// cadastrarPetDoJson(pets, json)

const cadastrarPetDoJson = (lista, json) => { 
  let arrayPets = JSON.parse(json)   
  console.log(arrayPets[0].nome);
}

const cadastrarPetDoJsonFor = (lista, json) => { 
  let arrayPets = JSON.parse(json)   
  for(let i = 0; i < arrayPets.length; i++){
    lista.push(arrayPets[i])
  }
  return lista
}
// cadastrarPetDoJson(pets, json)
// console.log (cadastrarPetDoJson(pets, json));


const filtarPerPorNome = (nome) => {
    let petsFilstrados = pets.filter((pet) => {
        return pet.nome == nome
    })

    if(petsFilstrados.length == 0){
        return "Nenhum pet foi encontrado com o nome " + nome
    }else{
        return petsFilstrados
    }
}
// console.log(filtarPerPorNome('Yoshi'))

// CRUD - Create, Read, Update, Delete

