-- @block
SELECT AVG(unit_cost) AS avg_cost,
	SUM(unit_cost) AS total_cost,
	MIN(unit_cost) AS min_cost,
	MAX(unit_cost) AS max_cost
FROM purchase_order_details;
-- @block
SELECT COUNT(DISTINCT purchase_order_id) AS unique_orders
FROM purchase_order_details;
-- @block
SELECT purchase_order_id,
	COUNT(product_id) AS product_count
FROM purchase_order_details
GROUP BY purchase_order_id
ORDER BY product_count DESC;
-- @block
SELECT date_received,
	COUNT(*) AS order_count
FROM purchase_order_details
WHERE quantity > 30
GROUP BY date_received;
-- @block
SELECT date_received,
	SUM(quantity * unit_cost) AS total_value
FROM purchase_order_details
GROUP BY date_received;
-- @block
SELECT unit_cost,
	AVG(quantity) AS avg_quantity,
	MAX(quantity) AS max_quantity
FROM purchase_order_details
WHERE purchase_order_id <= 100
GROUP BY unit_cost;
-- @block
SELECT CASE
		WHEN unit_cost > 20 THEN 'Expensive'
		ELSE 'Others'
	END AS category,
	COUNT(*) AS product_count
FROM purchase_order_details
WHERE inventory_id IS NOT NULL
GROUP BY category;