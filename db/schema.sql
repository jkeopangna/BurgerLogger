### SCHEMA

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Burger_Name VARCHAR(50) NOT NULL,
    Devoured BOOLEAN DEFAULT false
);