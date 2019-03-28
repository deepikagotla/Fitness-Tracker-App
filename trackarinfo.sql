CREATE TABLE IF NOT EXISTS users
(
id INT  NOT NULL AUTO_INCREMENT,
first_name TEXT,
last_name TEXT,
email TEXT,
password TEXT,
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