INSERT INTO participants(name, age, attending)
VALUES ('Kim', '23', 'True');

SELECT * FROM participants;

/* WORKS WITH MSSQL
INSERT INTO participants(name, age, attending)
OUTPUT Inserted.*
VALUES ('Kim', '23', 'True');
*/