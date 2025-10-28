// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.
async function task1():Promise<string>{
    return new Promise(resolve=>{
        setInterval(()=>{
           return resolve('Task1')
        },1000)
    })
};
async function task2():Promise<string>{
    return new Promise(resolve=>{
        setInterval(()=>{
           return resolve('Task2')
        },1500)
    })
};
async function task3():Promise<string>{
    return new Promise(resolve=>{
        setInterval(()=>{
           return resolve('Task3')
        },500)
    })
};
async function runFirstTask(){
    const result1 = await task1()
    console.log('task1');
    const result2 = await task1()
    console.log('task2');
    const result3 = await task1()
    console.log('task3');
};
runFirstTask();

// Задание 2
// Асинхронная обработка данных из массива
// Напишите функцию, которая принимает массив строк.
// Каждая строка будет асинхронно обрабатываться (например, преобразовываться в верхний регистр с задержкой).
// Используйте `Promise.all` для выполнения всех операций параллельно и вывода всех результатов.
async function toUppercaseStr(str:string):Promise<string> {
    return new Promise(resolve=>{
        setInterval(()=>{
            return resolve(str.toUpperCase())
        },2000)
    })
};
async function arayToUpper(prop:string[]) {
    const arr = prop.map(p=>toUppercaseStr(p));
    const result = await Promise.all(arr);
    console.log(`Result:${result}`)
}
arayToUpper(["hello", "world", "async", "await"]);

// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.
async function goodFunc():Promise<string>{
    return new Promise((resolve)=>{
        setInterval(()=>{
           return resolve('It works')
        },1000)
    })
};
async function badFunc():Promise<string>{
    return new Promise((_, reject)=>{
        setInterval(()=>{
           return reject('Ooops something goes wrong')
        },1000)
    })
};
async function runPromiseAll() {
  try {
    const results = await Promise.all([goodFunc(), badFunc(), goodFunc()])
    console.log("All results:", results);
  } catch (error) {
    console.error("Error:", error);
  }
}
runPromiseAll()
// Задание 4
// Асинхронная функция с динамическим временем выполнения
// Напишите асинхронную функцию, которая принимает массив чисел.
// Для каждого числа создайте промис, который будет завершаться через количество миллисекунд, равное значению числа.
// Используйте `Promise.all` для ожидания завершения всех промисов и вывода результатов в консоль.
async function dellayFunc(ms:number):Promise<string> {
    return new Promise(resolve=>{
        setTimeout(()=> resolve(`Done in:${ms} ms `) ,ms)
    })
}
async function runDznamicFunc(number:number[]) {
    const promise = number.map(num=> dellayFunc(num))
    const result = await Promise.all(promise)
    console.log(`Result: ${result}`)
}
runDznamicFunc([500, 1000, 1500, 2000])