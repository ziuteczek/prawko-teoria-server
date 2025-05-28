-- Enable foreign key constraints
PRAGMA foreign_keys = ON;

-- Insert dummy users
INSERT INTO user (email, name, password) VALUES
('alice@example.com', 'Alice Smith', 'password1'),
('bob@example.com', 'Bob Johnson', 'password2'),
('carol@example.com', 'Carol White', 'password3'),
('dave@example.com', 'Dave Brown', 'password4'),
('eve@example.com', 'Eve Davis', 'password5'),
('frank@example.com', 'Frank Miller', 'password6'),
('grace@example.com', 'Grace Wilson', 'password7'),
('heidi@example.com', 'Heidi Moore', 'password8'),
('ivan@example.com', 'Ivan Taylor', 'password9'),
('judy@example.com', 'Judy Anderson', 'password10');

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
