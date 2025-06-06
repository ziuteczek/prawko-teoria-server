PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    verification BOOLEAN DEFAULT FALSE,
    created TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS question (
    id INTEGER PRIMARY KEY NOT NULL,
    content INTEGER NOT NULL,
    correct_answer TEXT NOT NULL,
    category TEXT,
    media TEXT,
    media_id TEXT
);
CREATE TABLE IF NOT EXISTS answer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    picked_option TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    created TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY(question_id) REFERENCES question(id) ON DELETE CASCADE
);
-- Possible values of question_familiarity.stage:
--   'N' - No Answer
--         The user did not provide any response to the question.
--   'I' - Incorrect Answer
--         The user attempted to answer, but the response was incorrect.
--   'U' - Declared Unknown
--         The user explicitly stated they do not know the answer/
--   'C' - Correct Answer
--         The user provided a correct answer to the question.
CREATE TABLE IF NOT EXISTS question_familiarity (
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    stage TEXT CHECK(stage IN ('N','I','U','C')),
    FOREIGN KEY(question_id) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, question_id)
);
-- CREATE TABLE IF NOT EXISTS category (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name TEXT NOT NULL
-- );
-- CREATE TABLE IF NOT EXISTS question_category (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     question_id INTEGER NOT NULL,
--     category_id INTEGER NOT NULL,
--     FOREIGN KEY(question_id) REFERENCES question(id) ON DELETE CASCADE,
--     FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE
-- );
