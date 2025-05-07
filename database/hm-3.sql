-- @block 
SELECT TIMESTAMPDIFF(SECOND, '2004-08-18', NOW()) AS age_in_seconds;
-- @block
SELECT CURRENT_DATE + INTERVAL 51 DAY AS future_date;
-- @block
SELECT CURRENT_DATE + INTERVAL 51 DAY AS future_date,
	DATE_FORMAT(CURRENT_DATE + INTERVAL 51 DAY, '%W') AS day_of_week;
-- @block
SELECT transaction_created_date,
	DATE_ADD(transaction_created_date, INTERVAL 3 HOUR) AS transaction_plus_3_hours
FROM inventory_transactions;
-- @block
SELECT CONCAT(
		'Клиент с id ',
		customer_id,
		' сделал заказ ',
		order_date
	) AS message
FROM orders;
-- @block
SELECT CONCAT(
		'Клиент с id ',
		CAST(customer_id AS CHAR(10)),
		' сделал заказ ',
		order_date
	) AS message
FROM orders;