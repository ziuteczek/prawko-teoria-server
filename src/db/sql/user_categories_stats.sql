SELECT question.category,
COUNT(case when question_familiarity.stage = 'K' then 1 end) AS 'known',
COUNT(case when question_familiarity.stage = 'U' then 1 end) AS 'unkown'
FROM question_familiarity
JOIN question ON question.id = question_familiarity.question_id
WHERE question_familiarity.user_id = $id
GROUP BY question.category;

-- ALTERNATIVE:
-- SELECT question.category,
-- question_familiarity.stage,
-- COUNT(question_familiarity.stage) AS 'quantity'
-- FROM question_familiarity
-- JOIN question ON question.id = question_familiarity.question_id
-- WHERE question_familiarity.user_id = $id
-- GROUP BY question.category,question_familiarity.stage;