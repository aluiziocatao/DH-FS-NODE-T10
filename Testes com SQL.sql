/*clientes Criando banco de dados */
create database dh_node_fs10;

/* Indicando qual banco de dados iremos trabalhar */
use dh_node_fs10;

/* Criando a table teste*/
create table teste (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50),
    sobrenome varchar(50),
    email varchar(50)
);

/* Criar coluna data_cadastro com o tipo primitivo date*/
alter table teste add data_cadastro date;

/* descrevendo informacoes da tabela teste*/
describe teste;

alter table teste modify data_cadastro datetime;

alter table teste change sobrenome telefone varchar(15);

alter table teste rename to clientes;

describe clientes;

/* elimine a coluna data_cadastro*/
alter table clientes drop data_cadastro;

/* exclua a tabela cliente*/
/*drop table clientes;*/

/* exclua o banco de dados dh_node_fs10 */
/*drop database dh_node_fs10;*/