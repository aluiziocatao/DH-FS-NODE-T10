set foreign_key_checks = 0;

INSERT INTO tb_produto(produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido, id_finalidade) 
VALUES('Produto criado com a turma 10', 'Produto criado no intuito de fazer um insert com a galera da turma 10', 
	   '69901435', 'Rua Antonio Moura Malveira', '21', 'Residência', 'AC', 'Rio Branco', 'Conjunto Guiomard Santos', 1, 0, 1);
       
SELECT produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido 
from tb_produto where ativo = 1 AND data_cadastro BETWEEN '2019-11-19' and '2020-11-19';
       
SELECT produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido 
FROM tb_produto WHERE produto LIKE 'a%';

SELECT produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido 
FROM tb_produto WHERE produto LIKE '%a';

SELECT produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido 
FROM tb_produto WHERE produto LIKE '%a%';

SELECT id_produto, 	produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido 
FROM tb_produto WHERE produto LIKE '_a%';

SELECT id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido, data_cadastro 
FROM tb_produto ORDER BY id_produto DESC;

SELECT id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido, data_cadastro 
FROM tb_produto LIMIT 10;

SELECT id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, cidade, bairro, ativo, excluido, data_cadastro 
FROM tb_produto ORDER BY id_produto DESC LIMIT 10;

UPDATE tb_produto SET produto='Produto Show de Jarbas' WHERE id_produto = 1674 ;

DELETE FROM tb_produto WHERE id_produto = 1674 ;