import express from 'express'
import db from './db.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (_, res) => {
	try {
		res.send('Hello, World!')
	} catch (error) {
		res.status(500).send('Server error')
	}
})

app.post('/', (req, res) => {
	const { name } = req.body

	if (!name) {
		return res.status(400).json({ error: 'Name is required' })
	}

	res.json({ message: `Hello, ${name}!` })
})

app.get('/products', async (req, res) => {
	try {
		const [rows] = await db.query('SELECT * FROM products')
		res.json(rows)
	} catch (error) {
		res.status(500).json({ error: 'Error receiving products' })
	}
})

app.post('/products', async (req, res) => {
	const { name, price } = req.body

	if (!name || price === undefined) {
		return res.status(400).json({ error: 'Name and price are required' })
	}

	const priceNumber = parseFloat(price)
	if (isNaN(priceNumber)) {
		return res.status(400).json({ error: 'Price must be a valid number' })
	}

	try {
		const [result] = await db.query(
			'INSERT INTO products (name, price) VALUES (?, ?)',
			[name, priceNumber]
		)
		res.json({
			message: 'Product added successfully',
			productId: result.insertId,
		})
	} catch (error) {
		console.error('Error adding product:', error.message)
		res.status(500).json({ error: 'Error adding product' })
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
