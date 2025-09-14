import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const filename = process.env.FILENAME
const text = 'Записываю какой-нибудь текст в файл'

fs.writeFile(filename, text, 'utf-8', err => {
	if (err) {
		console.error('Ошибка при записи файла:', err)
		return
	}
	console.log(`Файл ${filename} создан.`)

	fs.readFile(filename, 'utf-8', (err, data) => {
		if (err) {
			console.error('Ошибка при чтении файла:', err)
			return
		}
		console.log('Содержимое файла:', data)
	})
})
