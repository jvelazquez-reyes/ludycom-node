CREATE DATABASE IF NOT EXISTS ludycomdb;

USE ludycomdb;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    password VARCHAR(10) DEFAULT NULL,
    PRIMARY KEY  (id)
);

DESCRIBE user;

INSERT INTO user values
    (1, 'Ludycom', 'test');

SELECT * FROM user;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    names VARCHAR(50),
    surnames VARCHAR(50),
    birthdate DATE,
    email VARCHAR(50),
    document INT(7),
    code INT(2),
    salary DECIMAL(10,2),
    status BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

CREATE TABLE workplace (
    id INT(11) NOT NULL AUTO_INCREMENT,
    code INT(2),
    name VARCHAR(50),
    manager INT(7),
    status BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);


