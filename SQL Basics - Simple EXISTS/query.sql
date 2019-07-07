SELECT  id, name
FROM    departments d
WHERE   EXISTS (
  SELECT department_id
  FROM sales s
  WHERE d.id = s.department_id
  AND price > 98
);