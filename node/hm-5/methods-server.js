import http from 'http'

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/plain')

	if (req.method === 'PUT') {
		res.statusCode = 200
		res.end('PUT-запрос обработан')
	} else if (req.method === 'DELETE') {
		res.statusCode = 200
		res.end('DELETE-запрос обработан')
	} else {
		res.statusCode = 405 // Method Not Allowed
		res.end(`Метод ${req.method} не поддерживается`)
	}
})

server.listen(3000, () => {
	console.log('Methods server running on http://localhost:3000')
})
