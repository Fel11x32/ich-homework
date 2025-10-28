import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());

// Получить все продукты
app.get('/products', async (_, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    res.status(500).json({ error: "Ошибка при получении продуктов" });
  }
});

// Добавить продукт
app.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: "Поля 'name' и 'price' обязательны" });
    }

    await db.query("INSERT INTO products (name, price) VALUES (?, ?)", [
      name,
      price,
    ]);

    res.status(201).json({ message: "✅ Продукт добавлен" });
  } catch (error) {
    console.error("❌ Ошибка при добавлении продукта:", error);
    res.status(500).json({ error: "Ошибка сервера при добавлении продукта" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
