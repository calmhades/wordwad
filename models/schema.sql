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






CREATE TABLE storybegins
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    root_entry_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE storyentry
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    body_text VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wordwad_db.users (user_name, user_email, user_password) VALUES ('test', 'test@example.com', 'password');
INSERT INTO wordwad_db.storybegins (root_entry_id, title, genre) VALUES ('14', 'Test', 'Porn');
INSERT INTO wordwad_db.storyentry (body_text) VALUES ('It was a dark and stormy night...');




-- ALTER TABLE table
-- ADD [COLUMN] column_name column_definition [FIRST|AFTER existing_column];






--USE THIS IN THE MODEL TO VALIDATE IF AN E-MAIL IS TRUE
-- validate:
-- {
--     isEmail: true
-- }            // checks for email format (foo@bar.com)
