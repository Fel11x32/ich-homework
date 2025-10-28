// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.
abstract class Animal{
    constructor(){};
    abstract makeSound():void
};
class Dog extends Animal{
    constructor(){super()};
    makeSound(): void {
        console.log('wouf wouf')
    };
};
class Cat extends Animal{
    constructor(){super()};
    makeSound(): void {
        console.log('meow meow')
    };
};

const animaL:Animal[]=[
    new Dog(),
    new Cat(),
    new Dog(),
]

animaL.forEach(animal=>animal.makeSound());

// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.
abstract class Shape {
    abstract calculateArea(): number;
}
abstract class ColoredShape extends Shape{
    constructor(public color:string){
        super()
    }
    abstract calculateArea(): number   
}

class ColoredCircle extends ColoredShape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class ColoredRectangle extends ColoredShape {
    constructor(public width: number, public height: number, color: string) {
        super(color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }
};
const shapes:ColoredShape[]=[
    new ColoredCircle(10,'black'),
    new ColoredRectangle(10,2,'red')
]
shapes.forEach(prop=>{console.log(`Color: ${prop.color}, Area: ${prop.calculateArea().toFixed(2)}`)})


// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.
abstract class Appliance {
    constructor() {}
    abstract turnOn():string
    abstract turnOff():string
}
class WachingMachine extends Appliance{
    constructor(){super()}
    turnOn(): string {
        return 'Стиралка работает'
    }
    turnOff(): string {
        return 'Стиралка выключилась'
    }
};
class Refrigerator extends Appliance{
    constructor(){super()}
    turnOn(): string {
        return 'Холодильник работает'
    }
    turnOff(): string {
        return 'Холодильник выключился'
    }
};
const machine: Appliance[]=[
    new WachingMachine(),
    new Refrigerator(),
]
machine.forEach(pop=>console.log(pop.turnOff(), pop.turnOn()))

// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии. 
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
    constructor(public balance: number) {}
    abstract deposite(amount:number):void
    abstract withdraw(amount:number):void
};
class SavingsAccount extends Account{
    constructor(balance:number, private yearRate:number){
        super(balance)
    };
    deposite(amount: number): void {
        this.balance += amount;
        console.log(`Счёт пополнили на ${amount}`)
    }
    withdraw(amount: number): void {
        if(amount> this.balance){
            console.log(`Недостаточно средств на счету`)
        }else{
            this.balance -= amount;
            console.log(`Сочета снято${amount}`)
        }
    }
    addRate():void{
        const rate = this.balance + this.yearRate / 100;
        this.balance += rate;
        console.log(`Начислены проценты ${rate}. Баланс: ${this.balance}`)
    }
}

class CheckingAccount extends Account {
    constructor(balance: number, private fee: number) {
        super(balance);
        this.fee = fee;
    }

    deposite(amount: number): void {
        this.balance += amount;
        console.log(`На расчетный счет внесено ${amount}. Баланс: ${this.balance}`);
    }

    withdraw(amount: number): void {
        const total = amount + this.fee;
        if (total > this.balance) {
            console.log("Недостаточно средств для снятия с учетом комиссии");
        } else {
            this.balance -= total;
            console.log(`С расчетного счета снято ${amount} + комиссия ${this.fee}. Баланс: ${this.balance}`);
        }
    }
}

const savings = new SavingsAccount(1000, 5);
savings.deposite(500);
savings.addRate();
savings.withdraw(200);

const checking = new CheckingAccount(1000, 20);
checking.deposite(300);
checking.withdraw(500);
checking.withdraw(1000);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const playlist: Media[] = [
    new Audio(),
    new Video(),
    new Audio(),
];

playlist.forEach(item => item.play());