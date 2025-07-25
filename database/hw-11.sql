DELIMITER // CREATE FUNCTION circle_area(radius FLOAT) RETURNS FLOAT DETERMINISTIC BEGIN RETURN PI() * POW(radius, 2);
END;
// DELIMITER;
SELECT circle_area(1) AS area;
DROP FUNCTION IF EXISTS circle_area;
DELIMITER // CREATE FUNCTION hypotenuse(a FLOAT, b FLOAT) RETURNS FLOAT DETERMINISTIC BEGIN RETURN SQRT(POW(a, 2) + POW(b, 2));
END;
// DELIMITER;
SELECT hypotenuse(3, 4);