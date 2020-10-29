let contatos = [
    {
        'id': 1,
        'nome': 'Aluízio',
        'email': 'aneto@gmail.com',
        'mensagem': 'Primeiro texto do card que temos para exibir',
    },
    {
        'id': 2,
        'nome': 'Ravyson',
        'email': 'ravyson@gmail.com',
        'mensagem': 'Segundo texto do card que temos para exibir',
    },
    {
        'id': 3,
        'nome': 'Socorro',
        'email': 'socorro@gmail.com',
        'mensagem': 'Terceiro texto do card que temos para exibir',
    },
];

module.exports = {
    registrar(req, res, next){        
        let {nome, email, mensagem} = req.body;
        let id = contatos.length + 1;
        contatos.push({id, nome, email, mensagem})
        res.send(contatos);
    },

    alterar(req, res, next){
        res.render('contatos', contatos);
    },

    listar(req, res, next){

    },

    excluir(req, res, next){

    },
}