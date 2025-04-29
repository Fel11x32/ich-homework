-- @block
SELECT * FROM suppliers;

-- @block
SELECT 
	id, 
	order_id,
	IF (unit_price > 10, 'Expensive', 'Cheap') AS category
FROM order_details;  

-- @block
SELECT 
	id, 
	order_id,
	CASE 
		WHEN unit_price > 10 THEN 'Expensive'
		ELSE 'Cheap'
	END AS category
FROM order_details;

-- @block
SELECT
  *,
  quantity * unit_price AS total_price
FROM order_details
WHERE purchase_order_id IS NULL;

-- @block 
SELECT 
	CONCAT(first_name, '', last_name) as full_name 
FROM employees
LIMIT 3 OFFSET 1;

-- @block
SELECT 
  DATE_FORMAT(order_date, '%Y-%m') AS years_month
FROM orders;

-- @block
SELECT DISTINCT company
FROM customers
ORDER BY company DESC;