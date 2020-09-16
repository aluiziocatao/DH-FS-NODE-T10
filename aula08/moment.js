const moment = require('moment')
const date_fns = require('date-fns')

moment.locale('pt-BR');
date_fns.locale('pt-BR')

console.log(moment().format('l'))
console.log()
//Desafio de exibir data atual no formato atual BR que estamos acostumados
//15/09/2020

//Desafio 1 pra casa .
//Trazer a diferença de dias e meses entre 15/09/205 e 15/09/2020
//Utilizando a biblioteca MOMENT


//Desafio 2 pra casa .
//Trazer a diferença de dias e meses entre 15/09/205 e 15/09/2020
//Utilizando a biblioteca DATE-FNS