import db from "./db.js";

async function setup() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL
      )
    `);
    console.log("✅ Таблица products создана");
    process.exit();
  } catch (error) {
    console.error("❌ Ошибка при создании таблицы:", error);
    process.exit(1);
  }
}

setup();