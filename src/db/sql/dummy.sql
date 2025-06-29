-- Insert dummy users
-- Passwords are hashed Pasword1, Password2, Password3, ... , Password10
INSERT INTO user (email, name, password) VALUES
('alice@example.com', 'Alice Smith', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$PzxnMYcpurXmTO9LzCrnzg'),
('bob@example.com', 'Bob Johnson', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$6ULSTQOfija7U6+iaIBfjw'),
('carol@example.com', 'Carol White', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$fSDEE6rAVSkA82SKlW3irw'),
('dave@example.com', 'Dave Brown', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$ayEbFVYxWsvjlFQsQfba9Q'),
('eve@example.com', 'Eve Davis', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$CsZbxdn+AKkg0q/ao5bimA'),
('frank@example.com', 'Frank Miller', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$W5FXmREj1lXkE38cfZiNZw'),
('grace@example.com', 'Grace Wilson', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$uVhH/pLIVce/P3XFQSIcrA'),
('heidi@example.com', 'Heidi Moore', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$t3cAjd1TklIDs5Ebvy+dzQ'),
('ivan@example.com', 'Ivan Taylor', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$K/wH2oXzcQntlBoMyfsNVA'),
('judy@example.com', 'Judy Anderson', '$argon2i$v=19$m=16,t=2,p=1$THNYMU5DSG0wTlJjMjhpdA$O+xp23F4XMniAXk1GW22Mw');

INSERT INTO answer (picked_option, user_id,question_id)
VALUES
('Tak', 9, 99),
('Tak', 9, 988),
('Nie', 9, 990),
('Nie', 9, 991),
('Nie', 2, 1369),
('Tak', 1, 997),
('Nie', 9, 1015),
('Tak', 9, 1015),
('Tak', 9, 1015),
('Nie', 9, 891),
('Nie', 9, 3367);

-- INSERT INTO question_familiarity (question_id,user_id,stage)
-- VALUES
-- (99,9,'K'),
-- (988,9, 'U'),
-- (990,9, 'N'),
-- (997,9, 'K'),
-- (1015,9, 'U'),
-- (991,9, 'N'),
-- (3367,9, 'N');