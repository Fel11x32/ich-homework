-- @block
SELECT product_id,
inventory_id,
LAG(inventory_id) OVER(partition by product_id order by quantity) as prev_inventory_id,
LEAD(inventory_id) OVER(partition by product_id order by quantity) as next_inventory_id
FROM order_details;
-- @block
SELECT order_id, 
unit_price,
FIRST_VALUE(unit_price) OVER(partition by order_id order by unit_price asc) as min_inventory_id,
FIRST_VALUE(unit_price) OVER(partition by order_id order by unit_price desc) as max_inventory_id
FROM order_details;
-- @block
SELECT
  order_id,
  unit_price,
  unit_price - FIRST_VALUE(unit_price) OVER (
    PARTITION BY order_id
    ORDER BY unit_price ASC
  ) AS diff_from_min
FROM order_details;
-- @block
SELECT quantity,
RANK() OVER(ORDER BY quantity desc)as rank_quantity
FROM order_details;
-- @block
SELECT * FROM(
SELECT quantity,
RANK() OVER(ORDER BY quantity desc)as rank_quantity
FROM order_details
)AS ranked
WHERE rank_quantity <=10;