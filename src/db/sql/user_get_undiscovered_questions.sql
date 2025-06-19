SELECT question.*
FROM question
LEFT JOIN answer ON question.id = answer.question_id AND answer.user_id = $id
WHERE answer.question_id IS NULL AND question.category = $category AND question.id NOT IN ($exclude)
LIMIT $quantity;