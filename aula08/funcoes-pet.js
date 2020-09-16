// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets
const listarPets = (pets) => {
    pets.forEach(pet => {
        console.log("Nome: " + pet.nome);
        console.log("Tipo: " + pet.tipo);
    });
}

// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
const validaDados = (novoPet) => {
    return (
      // novoPet.id &&
      novoPet.nome && 
      novoPet.tipo &&
      novoPet.raca &&
      novoPet.idade &&
      novoPet.genero &&
      // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
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
  
        let novoObjeto = {
          id: pets.length + 1,
          ...objetoPet
        }
  
        pets.push(novoObjeto)
        console.log(pets)
      } else {
        console.log("O objeto não tem todas propriedades necessárias informadas")
      }
    } else { 
      console.log("Insira um objeto válido")
    }
  }
// Desafio - função para verificar animais vacinados ou aqueles que precisam de vacina, lembrando que está função irá receber um parâmetro.
// (podendo ser um único pet da lista, ou, caso queira fazer o Extra terá que trabalhar a lista por completo).
// (Extra - se quiserem efetuar uma listagem de animais vacinados e não vacinados)
// Dica: vocês podem criar uma propriedade vacinado e atribuir valores booleanos (true ou false)

const vacinadosOrlando = (pets) => {
    let petsVacinados = [];
    let petsNaoVacinados = [];
    let numPetVac = 0;
    let numPetNVac = 0;
  
    for(let i = 0; i < pets.length; i++){
      if(pets[i].vacinado){
        petsVacinados.push(pets[i].nome);
        numPetVac = numPetVac + 1;
      } else{
        petsNaoVacinados.push(pets[i].nome)
        numPetNVac = numPetNVac + 1;
      }
    }
    console.log("Pets Vacinados: ("+numPetVac+")");
    console.log("Essa é a lista de animais vacinados: " + petsVacinados);
  
    console.log("Pets NÃO Vacinados: ("+numPetNVac+")");
    console.log("Essa é a lista de animais não vacinados: " + petsNaoVacinados);
  }

  // Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: dar banho no pet e tosar o pet
// sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
const servicosPrestados = (pet, servico) => {
    servico(pet)
}

const darBanhoNoPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de banho realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " tomou banho")
}

const tosarPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de tosa realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " foi tosado")
}

// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos
const cadastrarPetsDoJsonSpreadOperator = (lista, json) => {
    let arrayPets = JSON.parse(json)
    lista.push(...arrayPets)
    return lista
  }

  // Desafio - filtrar todos pets com um determinado nome, ou, se não encontrar nenhum pet para retornar
// exibir uma mensagem de que não encontrou nenhum pet com aquele nome informado
const filtraPetPorNome = (pets, nome) => {
    let petsFiltrados = pets.filter((pet) => {
      return pet.nome == nome
    })
  
    if(petsFiltrados.length == 0){
      return "Nenhum pet foi encontrado com o nome " + nome
    } else {
      return petsFiltrados
    }
  }

  // Desafio 1 - aprimorar a função para passar o ID como primeira propriedade
// dá para resolver utilizando o spread operator para criar um objeto e depois de
// adicionar o id ai sim unimos com o restante do objeto que estamos recebendo com
// todas as outras propriedades, podemos avaliar o resultado na função cadastrarPet

// Desafio 2 - de remover um pet especifico
const removerPet = (pets, id) => {
    let pet = pets.filter((pet) => {
      return pet.id != id
    })
  
    if(pet.length != 0){
      pets.splice(id - 1, 1)
      console.log(pets)
    } else {
      console.log("Nenhum pet foi encontrado com o id " + id)
    }
  }

  // Desafio 3 - de alterar um pet especifico
const atualizaPet = (pets, id, objeto) => {
    let pet = pets.find(pet => pet.id == id)
  
    for(var propriedade in objeto){
      if(propriedade == "nome"){
        pet.nome = objeto[propriedade]
      }
  
      if(propriedade == "tipo"){
        pet.tipo = objeto[propriedade]
      }
  
      if(propriedade == "raca"){
        pet.raca = objeto[propriedade]
      }
  
      if(propriedade == "idade"){
        pet.idade = objeto[propriedade]
      }
  
       if(propriedade == "vacinado"){
        pet.vacinado = objeto[propriedade]
      }
    }
    console.log(pet)
  }

module.exports = {
    listarPets,
    validaDados,
    cadastrarPet,
    vacinadosOrlando,
    darBanhoNoPet,
    tosarPet,
    servicosPrestados,
    cadastrarPetsDoJsonSpreadOperator,
    filtraPetPorNome,
    removerPet,
    atualizaPet
};