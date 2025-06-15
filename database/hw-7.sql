-- @block
SELECT p.product_name,
	(
		SELECT SUM(quantity)
		FROM order_details od
		WHERE od.product_id = p.id
	) AS total_quantity
FROM products p;
-- @block
WITH product_quantity AS(
	SELECT product_id,
		SUM(quantity) AS total_quantity
	FROM order_details
	GROUP BY product_id
)
SELECT p.product_name,
	pq.total_quantity
FROM products p
	JOIN product_quantity pq ON p.id = pq.product_id;
-- @block
SELECT *
FROM orders
WHERE order_date > (
		SELECT MIN(order_date)
		FROM orders o
			JOIN customers c ON o.customer_id = c.id
		WHERE c.last_name = 'Lee'
	);
-- @block
SELECT *
FROM products
WHERE target_level = (
		SELECT MAX(target_level)
		FROM products
	);