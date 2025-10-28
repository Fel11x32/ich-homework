// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк),
//  а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.
type Admin = {
    name: string;
    permissions: string[];
};

type User = {
    name: string;
    email: string;
};

type AdminUser = Admin & User; 

const adminUser: AdminUser = {
    name: "Alice",
    permissions: ["read", "write", "delete"],
    email: "alice@example.com"
};

console.log(adminUser);

// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, 
// который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.
interface Car{
    make:string;
    model:string;
    year?:number;
    engine:Engine;
};
interface Engine{
    type:string;
    horsepower:number;
};
const car1:Car={
    make:'DE',
    model:'Audi',
    year:2010,
    engine:{
        type:'V6',
        horsepower:170,
    }
};
const car2:Car={
    make:'DE',
    model:'BMW:E46',
    engine:{
        type:'V8',
        horsepower:187,
    },
};
function showInfoOfCar (obj:Car):void{
    console.log(`Make:${obj.make}, Model:${obj.model}`);
    if(obj.year){
        console.log(`Year:${obj.year}`)
    }
    console.log(`Engine type:${obj.engine.type},Engine horsepower:${obj.engine.horsepower}`)
}
showInfoOfCar(car1);
showInfoOfCar(car2);


// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число),
//  а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.
interface Product {
    name: string;
    price: number;
}

interface Discount {
    product: Product;
    discount: number;
}

const calculateDiscount = (prod: Discount): number => {
    return prod.product.price - (prod.product.price * prod.discount) / 100;
};

const product: Discount = {
    product: {
        name: "TV",
        price: 3000
    },
    discount: 20
};

console.log(`Новая цена: ${calculateDiscount(product)}`);

// Задание 4
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface Employee {
    name: string;
    salary: number;
}
const employees: Employee[] = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 5500 },
];

const totalSalary = (employees:Employee[]):number=>{
    const total = employees.reduce((acc, cur)=> acc + cur.salary, 0);
    return total
}
console.log(`Total:${totalSalary(employees)}`);

// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.
interface Person{
    firstname:string;
    lastname:string;
};
interface Student extends Person{
    grade:number;
};

const showInfo = (prop:Student):void=>{
    console.log(`Full name: ${prop.firstname} ${prop.lastname}`);
    console.log(`Grade: ${prop.grade}`)
}
const student: Student = {
    firstname: "John",
    lastname: "Doe",
    grade: 10
};
showInfo(student)


// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её
const concatStr = (str1:string, str2:string):string=>{
    return str1.concat(str2);
}
console.log(concatStr('some','thing'))