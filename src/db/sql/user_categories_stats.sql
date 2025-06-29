SELECT COALESCE(question.category,'brak kategorii') as 'category',
COUNT(case when answer.picked_option = question.correct_answer then 1 else null end) AS 'known',
COUNT(case when answer.picked_option != question.correct_answer then 1 else null end) AS 'unknown'
FROM question
JOIN answer ON answer.question_id = question.id
WHERE answer.user_id = $id
GROUP BY question.category;