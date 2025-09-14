const fs = require('fs')
const path = require('path')

//1

const pathToFolder = path.join(__dirname, 'myFolder')

fs.mkdir(pathToFolder, error => {
	if (error) {
		console.error('Ошибка при создании папки: ', error)
		return
	}

	console.log('Папка создана')

	fs.rmdir(pathToFolder, error => {
		if (error) {
			console.error('Ошибка при удалении папки: ', error)
			return
		}
		console.log('Папка удалена')
	})
})

//2

const pathToFile = path.join(__dirname, 'info.txt')
const content = 'На улице гроза и сильный дождь.'

fs.writeFile(pathToFile, content, error => {
	if (error) {
		console.error('Ошибка при записи файла')
		return
	}

	console.log('Файл создан')

	fs.readFile(pathToFile, 'utf-8', (error, data) => {
		if (error) {
			console.error('Ошибка при чтении файла')
			return
		}
		console.log('Содержимое файла: ', data)
	})
})
