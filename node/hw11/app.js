// app.js
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
// Создаём экземпляр приложения
const server = express();
const PORT = process.env.PORT || 3006

// Middleware для обработки JSON
server.use(express.json());

// Мини-БД продуктов
let items = [
  { id: 1, title: 'First Product', cost: 29.99 },
  { id: 2, title: 'Second Product', cost: 49.99 },
];

// =======================
// Маршруты API
// =======================

// Получить все продукты
server.get('/items', (req, res) => {
  res.json(items);
});

// Получить продукт по ID
server.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(p => p.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Продукт не найден' });
  }

  res.json(item);
});

// Создать новый продукт
server.post('/items', (req, res) => {
  const { title, cost } = req.body;

  if (!title || !cost) {
    return res.status(400).json({ error: 'Требуются title и cost' });
  }

  const newItem = {
    id: items.length + 1,
    title,
    cost,
  };

  items.push(newItem);

  res.status(201).json(newItem);
});

// =======================
// Запуск сервера
// =======================
server.listen(PORT, () => {
  console.log(`API работает на http://localhost:${PORT}`);
});
