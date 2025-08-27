function greetUser(name: string): void {
	console.log(`Привет, ${name}!`)
}

greetUser('Влад')

interface Person {
	name: string
	age: number
	city: string
}

function printPersonInfo(person: Person): void {
	console.log(
		`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
	)
}

const person1: Person = { name: 'София', age: 20, city: 'Берлин' }
printPersonInfo(person1)

function squareNumber(num: number): number {
	return num * num
}

console.log(squareNumber(5)) // 25

function isEven(num: number): boolean {
	return num % 2 === 0
}

console.log(isEven(4)) // true
console.log(isEven(7)) // false

interface Student {
	name: string
	grade: number
}

function printStudentInfo(student: Student): void {
	console.log(`Студент: ${student.name}, Оценка: ${student.grade}`)
}

const student1: Student = { name: 'Иван', grade: 9 }
printStudentInfo(student1)

function logMessage(message: string): void {
	console.log(message)
}

logMessage('Это сообщение для консоли')
