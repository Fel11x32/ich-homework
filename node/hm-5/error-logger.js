import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
	try {
		throw new Error('Тестовая ошибка сервера')
	} catch (err) {
		fs.appendFile(
			'errors.log',
			`${new Date().toISOString()} - ${err.message}\n`,
			fsErr => {
				if (fsErr) console.error('Ошибка записи в errors.log:', fsErr)
			}
		)

		res.statusCode = 500
		res.setHeader('Content-Type', 'text/plain')
		res.end('Internal Server Error')
	}
})

server.listen(3000, () => {
	console.log('Error logger server running on http://localhost:3000')
})
