CREATE DATABASE test;
use test;

CREATE TABLE test(
    idTask int not null AUTO_INCREMENT,
    task varchar(100),
    PRIMARY KEY (idTask)
);

INSERT INTO test(task)
VALUES("sa merg la vivo"), ("sa termin ideea")