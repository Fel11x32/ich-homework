SELECT *
FROM suppliers 
WHERE company = 'Supplier A'

SELECT *, quantity * unit_cost AS total_price
FROM purchase_order_details 
WHERE purchase_order_id IS NULL;

SELECT CURRENT_DATE + INTERVAL 51 DAY AS future_date;

SELECT COUNT(DISTINCT purchase_order_id) AS unique_orders
FROM purchase_order_details ;

SELECT od.*, po.payment_method
FROM order_details od
JOIN purchase_orders po ON od.purchase_order_id = po.id
WHERE po.payment_method IS NOT NULL;
