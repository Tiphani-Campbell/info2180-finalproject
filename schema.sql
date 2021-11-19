DROP DATABASE IF EXISTS bugme;
CREATE DATABASE bugme;
USE bugme;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id int(20) NOT NULL AUTO_INCREMENT,
    firstname varchar(20),
    lastname varchar(20),
    password varchar(50),
    email varchar(50),
    date_joined DATETIME,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS issues;
CREATE TABLE issues(
    id int(20) NOT NULL AUTO_INCREMENT,
    title varchar(100),
    description TEXT, 
    type varchar(50),
    priority varchar(50),
    status varchar(50),
    assigned_to int(20),
    created_by int(20),
    created DATETIME,
    updated DATETIME,
    primary key(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users(firstname,lastname,password,email,date_joined) VALUES ('Jane','Doe',MD5('password123'),'admin@project2.com','2021-11-18 11:24:03');