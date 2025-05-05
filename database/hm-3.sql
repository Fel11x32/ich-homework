-- @block 
SELECT TIMESTAMPDIFF(SECOND, '2004-08-18', NOW()) AS age_in_seconds;

-- @block
SELECT CURRENT_DATE + INTERVAL 51 DAY AS future_date;

-- @block
SELECT
	CURRENT_DATE + INTERVAL 51 DAY AS future_date,
	DATE_FORMAT(CURRENT_DATE + INTERVAL 51 DAY, '%W') AS day_of_week;

-- @block
	