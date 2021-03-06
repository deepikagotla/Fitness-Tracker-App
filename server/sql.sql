CREATE TABLE IF NOT EXISTS users
(
id INT  NOT NULL AUTO_INCREMENT,
first_name TEXT,
last_name TEXT,
email TEXT,
password TEXT,
gender TEXT,
phone TEXT,
dob date,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS friends
(
id INT  NOT NULL AUTO_INCREMENT,
friend_id INT,
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY(friend_id) REFERENCES users(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS exercises
(
id INT  NOT NULL AUTO_INCREMENT,
exercise_name TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS routines
(
id INT  NOT NULL AUTO_INCREMENT,
routine_type TEXT,
routine_stage TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS workouts
(
id INT  NOT NULL AUTO_INCREMENT,
workout_type TEXT,
step TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS diet_plans
(
id INT  NOT NULL AUTO_INCREMENT,
diet_type TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS body_types
(
id INT  NOT NULL AUTO_INCREMENT,
body_type TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS products
(
id INT  NOT NULL AUTO_INCREMENT,
product_type TEXT,
PRIMARY KEY(id)
);

ALTER TABLE `users` ADD `phone` INT(15) NULL DEFAULT NULL AFTER `password`, ADD `dob` TEXT NULL DEFAULT NULL AFTER `phone`, ADD `gender` VARCHAR(255) NULL DEFAULT NULL AFTER `dob`;