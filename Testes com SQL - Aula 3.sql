/*CREATE TABLE `cliente` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(60) DEFAULT NULL,
    `sobrenome`varchar(60) DEFAULT NULL,
    `cpf`char(11) DEFAULT NULL,
    `rg`char(9) DEFAULT NULL,
    `email` varchar(60) DEFAULT NULL,
    `telefone` varchar(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`cpf`),
    UNIQUE KEY (`rg`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;*/

CREATE TABLE `tb_funcionario`(
	`id` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nome` varchar(50) NOT NULL,
    `data_admissao` date,
    `salario` decimal(10,2)
);

INSERT INTO tb_funcionario (nome, data_admissao, salario) VALUES("Edwiges", "2020-11-20", 7050.00), ("Aluízio", "2020-11-20", 1250), 
("Socorro", "2020-03-20", 1050), ("Kerolayne", "2020-09-02", 6050), ("Samantha", "2020-09-20", 8050), ("Narelly", "2020-08-02", 1350),
("Jefferson", "2020-08-20", 1150), ("Ravyson", "2020-07-03", 5050), ("Caroline", "2020-07-20", 9050), ("Deise", "2020-06-29", 1450), 
("Ana Clara", "2020-06-20", 2050), ("Isa", "2020-10-22", 4050), ("Guilherme", "2020-10-20", 1050), ("Vinicius", "2020-01-02", 1550), 
("Lorenzo", "2020-01-10", 3050);

SELECT count(*) FROM tb_funcionario;

SELECT count(*) FROM tb_produto;

SELECT max(salario) FROM tb_funcionario;

TRUNCATE tb_funcionario;
