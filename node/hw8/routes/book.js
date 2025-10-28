// Импортируем express
import express from 'express';
// Импортируем модель Book для работы с таблицей Books
import Book from "../models/book.js";

// Создаём новый Router
const router = express.Router();

/* -----------------------------------
   GET /books
   Получить список всех книг
----------------------------------- */
router.get('/', async (_, res) => {
    try {
        // Находим все записи из таблицы Books
        const books = await Book.findAll();
        // Отправляем данные клиенту
        res.send({ success: true, data: books });
    } catch (error) {
        // Если произошла ошибка, отправляем 500 и сообщение об ошибке
        res.status(500).send({ success: false, message: error.message });
    }
});

/* -----------------------------------
   POST /books
   Создать новую книгу
----------------------------------- */
router.post('/', async (req, res) => {
    try {
        const { title, author, year } = req.body;

        // Создаём новую запись в таблице Books
        const book = await Book.create({ title, author, year });

        // Отправляем ответ с созданной книгой
        res.status(201).send({ success: true, data: book });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

/* -----------------------------------
   PUT /books/:id
   Обновить существующую книгу по ID
----------------------------------- */
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; // Получаем ID из параметров пути
        const { title, author, year } = req.body;

        // Ищем книгу по первичному ключу
        const book = await Book.findByPk(id);
        if (!book) {
            // Если книга не найдена, возвращаем 404
            return res.status(404).send({ success: false, message: "Book not found" });
        }

        // Обновляем данные книги
        await book.update({ title, author, year });

        // Отправляем обновлённую книгу клиенту
        res.send({ success: true, data: book });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

/* -----------------------------------
   DELETE /books/:id
   Удалить книгу по ID
----------------------------------- */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Находим книгу по ID
        const book = await Book.findByPk(id);
        if (!book) {
            // Если книга не найдена, возвращаем 404
            return res.status(404).send({ success: false, message: "Book not found" });
        }

        // Удаляем книгу из базы
        await book.destroy();

        res.send({ success: true, message: "Book deleted" });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

// Экспортируем роутер, чтобы подключить его в app.js
export default router;
