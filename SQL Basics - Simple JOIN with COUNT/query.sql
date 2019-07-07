SELECT    p.id,
          p.name,
          count(t.id) as toy_count
FROM      people p
JOIN      toys t
ON        p.id = t.people_id
GROUP BY  p.id;