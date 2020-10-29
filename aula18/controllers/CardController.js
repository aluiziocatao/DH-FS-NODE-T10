module.exports = {
    index(req, res, next) {
        let cards = [
          {
            'caminho_imagem': './images/img01.jpg',
            'titulo': 'Primeiro Título',
            'texto': 'Primeiro texto do card que temos para exibir',
            'botao': 'Ver mais'
          },
          {
            'caminho_imagem': './images/img02.jpg',
            'titulo': 'Segundo Título',
            'texto': 'Segundo texto do card que temos para exibir',
            'botao': 'Ver mais'
          },
          {
            'caminho_imagem': './images/img03.png',
            'titulo': 'Terceiro Título',
            'texto': 'Terceiro texto do card que temos para exibir',
            'botao': 'Ver mais'
          },
        ];
      
        res.render('index', { cards: cards });
      }
}