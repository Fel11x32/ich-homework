USE northwind;

SELECT * FROM suppliers;

SELECT * FROM suppliers
WHERE company = 'Supplier A';

SELECT * FROM purchase_orders;

SELECT * FROM purchase_orders
WHERE supplier_id = 2;

SELECT supplier_id, shipping_fee FROM purchase_orders
WHERE created_by = 1 AND supplier_id = 5;

SELECT last_name, first_name FROM employees
WHERE address = '123 2nd Avenue' OR address = '123 8th Avenue';

SELECT last_name, first_name FROM employees
WHERE address IN ('123 2nd Avenue', '123 8th Avenue');

SELECT last_name, first_name FROM employees
WHERE last_name LIKE '_%p%_';

SELECT * FROM orders
WHERE shipper_id IS NULL;
