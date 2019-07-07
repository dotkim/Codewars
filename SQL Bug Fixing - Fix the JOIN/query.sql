SELECT    j.job_title,
          CAST(CAST(AVG(j.salary) AS DECIMAL(5, 2)) AS FLOAT) AS average_salary,
          COUNT(p.id) as total_people,
          CAST(CAST(SUM(j.salary) AS DECIMAL(5, 2)) AS FLOAT) AS total_salary
FROM      people p
JOIN      job j
ON        j.people_id = p.id
GROUP BY  j.job_title
ORDER BY  average_salary DESC;