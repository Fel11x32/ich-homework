// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.
const Arr:number[] = [1,2,3,4,5,6,7,8,9,10];

interface Varibles{
    (arr:number[]):number
};

const sumEvenNumbers:Varibles = (arr)=>{
    const evenArr = arr.filter(num=>num % 2 === 0)
    return evenArr.reduce((acc,curr)=>acc+curr,0)
};
console.log(sumEvenNumbers(Arr))

// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции,
// которая принимает строку и возвращает `boolean` (например, проверяет, является ли строка пустой). Реализуйте такую функцию.
interface StringToBooleanFunction{
    (str:string):boolean
}

const booleanFunction :StringToBooleanFunction = (str) => {
    if(typeof str === 'string'){
        return true
    }else{
        return false
    }
};
console.log(booleanFunction('world'));

// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки и возвращающей `boolean` (например, для проверки равенства строк).
// Напишите функцию, соответствующую этому типу.
interface someFunction{
    (str1:string, str2:string):boolean
}

const CompareStrings :someFunction = (str,str2) => {
    const reversStr2 = str.split('').reverse().join('');
    if(str === reversStr2){
        return true
    }else{
        return false
    }
};
console.log(CompareStrings('seven','six'));

// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа и возвращает последний элемент этого массива.
function getLastElement<T>(arr:T[]):T{
    return arr[arr.length-1];
}
const arrayOfNumbers:number[] = [1,2,3,4,5,6,7,8,9,10];
const arrStr:string[]=['apple', 'orange', 'kiwi', 'watermelon', 'papaya']

console.log(getLastElement(arrayOfNumbers));
console.log(getLastElement(arrStr));
// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа и возвращает массив из этих трёх элементов.
function makeTriple <T>(a:T,b:T,c:T):T[]{
    return[a,b,c];
};
console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(true, false, true)); 
