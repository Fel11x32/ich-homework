-- @block
SELECT id,
	employee_id
FROM orders
UNION
SELECT id,
	created_by
FROM purchase_orders;
-- @block
SELECT id,
	employee_id,
	'orders' AS source
FROM orders
WHERE employee_id IS NOT NULL
UNION
SELECT id,
	created_by,
	'purchase_orders' AS source
FROM purchase_orders;
-- @block
SELECT od.*,
	po.payment_method
FROM order_details od
	JOIN purchase_orders po ON od.order_id = po.id
WHERE po.payment_method IS NOT NULL;
-- @block
SELECT o.id AS order_id,
	c.last_name
FROM orders o
	JOIN invoices i ON o.id = i.order_id
	JOIN customers c ON o.customer_id = c.id;
-- @block
SELECT o.id AS order_id,
	c.last_name,
	COUNT(i.id) as count_invoices
FROM orders o
	JOIN invoices i ON o.id = i.order_id
	JOIN customers c ON o.customer_id = c.id
GROUP BY c.id,
	c.last_name;