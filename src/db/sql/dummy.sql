-- Insert dummy users
-- Passwords are hashed Pasword$
-- $ Representing 1,2,3...,10
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

-- Insert dummy answers using only the allowed values
INSERT INTO answer (answer, user_id) VALUES
('A', 1),
('B', 1),
('Tak', 1),
('C', 2),
('Nie', 2),
('A', 3),
('B', 3),
('C', 3),
('Tak', 4),
('Nie', 4),
('A', 4),
('C', 5),
('Tak', 5),
('Nie', 6),
('A', 7),
('C', 7),
('B', 8),
('Tak', 9),
('Nie', 9),
('C', 9),
('A', 10),
('B', 10);
