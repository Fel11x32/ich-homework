-- @block
CREATE TABLE weather (
	id INT AUTO_INCREMENT PRIMARY KEY,
	date DATE NOT NULL,
	day_temperature INT CHECK (
		day_temperature BETWEEN -30 AND 30
	),
	night_temperature INT CHECK (
		night_temperature BETWEEN -30 AND 30
	),
	wind_speed DECIMAL(4, 1) CHECK (wind_speed >= 0)
);
-- @block
INSERT INTO weather (
		date,
		day_temperature,
		night_temperature,
		wind_speed
	)
VALUES ('2025-05-02', 18, 9, 2.1),
	('2025-05-03', 20, 10, 3.0),
	('2025-05-04', 21, 11, 4.5),
	('2025-05-05', 17, 8, 1.8),
	('2025-05-06', 19, 7, 2.9);
-- @block
UPDATE weather
SET night_temperature = night_temperature + 1
WHERE wind_speed <= 3.0;
-- @block
CREATE VIEW weather_view AS
SELECT id,
	date,
	day_temperature,
	night_temperature,
	wind_speed,
	ROUND((day_temperature + night_temperature) / 2, 1) AS average_temperature,
	CASE
		WHEN wind_speed < 2 THEN 'штиль'
		WHEN wind_speed >= 2
		AND wind_speed < 5 THEN 'умеренный ветер'
		ELSE 'сильный ветер'
	END AS wind_description
FROM weather;
-- @block
SELECT *
FROM weather_view;