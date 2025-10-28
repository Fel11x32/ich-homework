// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки) и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.

class Animal {
    constructor(
        public name:string, 
        public species:string
    ){};
    sound(){
        console.log(`"The animal makes a sound"`)
    }
};
class Dog extends Animal{
    constructor(name:string, species:string, public breed:string){
        super(name, species);
    };
    sound(): void {
        console.log(`The dog barks`)
    };
};
const dog = new Dog('Sharik','huge','haski');
console.log(dog);
dog.sound();

// Задание 2
// Статическое свойство для учета всех книг
// Создайте класс `Library`, который имеет статическое свойство `totalBooks` (общее количество книг).
// При каждом добавлении книги это свойство должно увеличиваться.
// В классе также должен быть метод `addBook()`, который увеличивает счетчик книг.
// Создайте несколько объектов класса и проверьте, как изменяется общее количество книг.
class Library{
    static totalBooks = 0; 
    constructor(){};
    addBook():void{
        Library.totalBooks ++
    };
};
const lib1 = new Library();
const lib2 = new Library();
lib1.addBook();
lib1.addBook();
lib2.addBook();

console.log(Library.totalBooks);

// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

class Vehicle {
    constructor(private make: string, private model: string) {}

    getInfo(): string {
        return `${this.make} ${this.model}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make: string, model: string, private type: string) {
        super(make, model);
    }

    getFullInfo(): string {
        return `${this.getInfo()} - ${this.type}`;
    }
}

const vehicle1 = new Vehicle('nisan', 'gta5')
const bike = new Motorcycle("Honda", "CBR500R", "Sport");
console.log(bike.getFullInfo());
