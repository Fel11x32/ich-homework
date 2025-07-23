const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('message', (user, message) => {
	console.log(`${user}: ${message}`)
})

function sendMessage(user, message, emitter) {
	emitter.emit('message', user, message)
}

sendMessage('User', 'Hello', emitter)
sendMessage('User2', 'Hello John', emitter)
sendMessage('Vladyslav', 'Квантовый компьютер это...', emitter)
