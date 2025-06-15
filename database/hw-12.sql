SELECT department_id
FROM employees
WHERE id = 3;
DELIMITER // CREATE PROCEDURE get_employee_age(IN id_input INT, OUT result_age INT) BEGIN
SELECT age INTO result_age
FROM employees
WHERE id = id_input;
END;
// DELIMITER;
CALL get_employee_age(3, @age);
SELECT @age;
DELIMITER // CREATE PROCEDURE increase_salary(INOUT salary FLOAT) BEGIN
SET salary = salary * 0.9;
END;
// DELIMITER;
SET @salary = 1000;
CALL increase_salary(@salary);
SELECT @salary