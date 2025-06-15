-- @block
SELECT product_id,
	MIN(unit_cost) OVER (PARTITION BY product_id) AS min_unit_cost_by_product_id,
	MAX(unit_cost) OVER (PARTITION BY product_id) AS max_unit_cost_by_product_id,
	AVG(unit_cost) OVER (PARTITION BY product_id) AS avg_unit_cost_by_product_id
FROM purchase_order_details;
-- @block
SELECT DISTINCT product_id,
	MIN(unit_cost) OVER (PARTITION BY product_id) AS min_unit_cost_by_product_id,
	MAX(unit_cost) OVER (PARTITION BY product_id) AS max_unit_cost_by_product_id,
	AVG(unit_cost) OVER (PARTITION BY product_id) AS avg_unit_cost_by_product_id
FROM purchase_order_details;
-- @block
SELECT product_id,
	SUM(quantity * unit_cost) OVER (PARTITION BY product_id) AS total_order_cost
FROM purchase_order_details;
-- @block
SELECT SUM(quantity * unit_cost) AS total_order_cost
FROM purchase_order_details
GROUP BY product_id;
-- @block
SELECT purchase_order_id,
	date_received,
	posted_to_inventory,
	CASE
		WHEN COUNT(*) OVER (PARTITION BY date_received, posted_to_inventory) > 1 THEN '>1'
		ELSE '=1'
	END AS order_count_info
FROM purchase_order_details;