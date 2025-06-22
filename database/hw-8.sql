-- @block
SELECT *
FROM Printer
WHERE color = 'y';
-- @block
WITH maker_b AS (
	SELECT model
	FROM Product
	WHERE maker = 'B'
)
SELECT model,
	price
FROM PC
WHERE model IN (
		SELECT model
		FROM maker_b
	)
UNION
SELECT model,
	price
FROM Laptop
WHERE model IN (
		SELECT model
		FROM maker_b
	)
UNION
SELECT model,
	price
FROM Printer
WHERE model IN (
		SELECT model
		FROM maker_b
	);
-- @block
WITH PC_makers AS (
	SELECT DISTINCT maker
	FROM Product
	WHERE model IN (
			SELECT model
			FROM PC
		)
),
Laptop_makers AS (
	SELECT DISTINCT maker
	FROM Product
	WHERE model IN (
			SELECT model
			FROM Laptop
		)
)
SELECT maker
FROM PC_makers
WHERE maker NOT IN (
		SELECT maker
		FROM Laptop_makers
	);
-- @block
SELECT DISTINCT p.maker
FROM Product p
	JOIN PC pc ON p.model = pc.model
WHERE pc.speed >= 450;
-- @block
SELECT AVG(speed) AS avg_speed
from PC;
-- @block
SELECT p.maker,
	AVG(lp.screen) AS avg_screen
FROM Product p
	JOIN Laptop lp ON p.model = lp.model
GROUP BY (p.maker);