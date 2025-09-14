import http from 'http'

const server = http.createServer((req, res) => {
	const authHeader = req.headers['authorization']

	res.setHeader('Content-Type', 'text/plain')

	if (!authHeader) {
		res.statusCode = 401
		res.end('Unauthorized')
	} else {
		res.statusCode = 200
		res.end('Authorization header received')
	}
})

server.listen(3000, () => {
	console.log('Auth server running on http://localhost:3000')
})
