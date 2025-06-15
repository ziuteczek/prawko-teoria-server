SELECT IFNULL(question.category,'brak kategorii') as 'category',
COUNT(case when answer.picked_option = question.correct_answer then 1 end) AS 'known',
COUNT(case when answer.picked_option != question.correct_answer then 1 end) AS 'unkown'
FROM question
JOIN answer ON answer.question_id = question.id
WHERE answer.user_id = $id
GROUP BY question.category;