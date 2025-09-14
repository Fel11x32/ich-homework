import db from './db.js'

const createTable = async () => {
	try {
		await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL)`)

		console.log('The table was created successfully or already exists.')
	} catch (error) {
		console.error('Error creating table:', error.message)
	} finally {
		process.exit()
	}
}
createTable()
