SELECT question.category,
COUNT(case when question_familiarity.stage = 'N' then 1 else null end) AS 'unfamiliar',
COUNT(case when question_familiarity.stage = 'C' then 1 else null end) AS 'familiar',
COUNT(case when question_familiarity.stage = 'U' then 1 else null end) AS 'unkown',
COUNT(case when question_familiarity.stage = 'I' then 1 else null end) AS 'incorrect'
FROM question_familiarity
JOIN question ON question.id = question_familiarity.question_id
WHERE question_familiarity.user_id = $id
GROUP BY question.category;