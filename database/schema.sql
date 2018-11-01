
CREATE DATABASE wordwad_db;
USE wordwad_db;

CREATE TABLE users
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);






CREATE TABLE storyBegins
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    root_entry_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE storyEntry
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    body_text VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);




-- ALTER TABLE table
-- ADD [COLUMN] column_name column_definition [FIRST|AFTER existing_column];






--USE THIS IN THE MODEL TO VALIDATE IF AN E-MAIL IS TRUE
-- validate:
-- {
--     isEmail: true
-- }            // checks for email format (foo@bar.com)
