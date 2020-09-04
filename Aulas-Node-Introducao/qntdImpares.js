function naoPareDeContarImparesAte(numero){    
    let qntdDeImpares = 0;
    for (let i = 0; i <=numero; i++){

        if (i % 2 == 1) {
           qntdDeImpares = qntdDeImpares + 1;
         }
          
    }

    console.log(qntdDeImpares)
    
}
naoPareDeContarImparesAte(10)