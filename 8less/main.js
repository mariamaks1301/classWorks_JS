


// const func1 = (callback) => {
//     return callback()
// }

//  console.log(func1( () => 'callback' ));

// 1 MAP - изменяет каждый элемент массива

// const mapFunc = (arr)=> {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i] * 2];
//     }
//     return newArr
// }
// console.log(mapFunc([1, 2, 3, 4, 5]));

// const mapFunc = (arr)=> {
//     return arr.map((item, index, array) => {
//         return item * 2
//     })
// }
// console.log(mapFunc([1, 2, 3, 4, 5]));

// const mapFunc = (arr)=> {
//         return arr.map((item, index, array) => {
//             return typeof item
//         })
//     }
// console.log(mapFunc([1, 'Ivan', true, 4, []]));

// const mapFunc = (arr) => {
//     return arr.map((item, index, array)=> {
//         if(typeof item === 'number' || typeof item === 'string'){
//             return null
//         }
//         return item
//     });
// }
// console.log(mapFunc([1, 'Ivan', true, 4, []]));

// const mapFunc = (arr)=>{
//     return arr.map((item)=>{
//         return item.length
//     })
// }
// console.log(mapFunc(['Ivan', 'abraCadabra', 'Max', 'lexus']));

// const mapFunc = (arr, num)=> {
//     return arr.map((item) => {
//         return `${item} кратность ${num} = ${item % num}`
//     })
// }

// console.log(mapFunc([15, 12, 18, 20, 45], 5));

// FILTER

// const filterFunc = (arr)=> {
//     return arr.filter((item, index, array)=> {
//         return item !== 5
//     })

// }
// console.log(filterFunc([5, 1, 2, 3,4, 5]));

// const filterFunc = (arr)=> {
//     return arr.filter((item)=>{
//         return item < 5;
//     })

// }
// console.log(filterFunc([10, 1, 2, 13, 4, 22, 5]));

// const filterFunc = (arr) =>{
//     return arr.filter((item, index, array)=>{
//         return !item.includes('привет')
//     })
// }

// console.log(filterFunc(['привет', 'мир привет', 'мир', 'привет страна']));

// const filterFunc = (arr) =>{
//     return arr.filter((item, index, array)=>{
//         return item.indexOf('привет') < 0
//     })
// }

// console.log(filterFunc(['привет', 'мир привет', 'мир', 'привет страна']));

// const filterFunc = (arr)=>{
//     return arr.filter((item)=>{
//         if(typeof item === 'string'){
//             return item.length > 3
//         }
//         return item > 10
//     })
// }
// console.log(filterFunc(['Ivan',  'Max', 'Akdil', 10, 15, 20]));

// const findFunc = (arr)=>{
//     return arr.find((item)=>{
//         return item === 1
//     })

// }
// console.log(findFunc([1,2,4,2,1,1]));

// const findFunc = (arr)=>{
//     return arr.findIndex((item)=>{
//         return item === 2 
//     })

// }
// console.log(findFunc([1,2,4,2,1,1]));

// SOME

// const someFunc = (arr)=> {
//     return arr.some((item)=>{
//         return item > 10
//     }) 
// }
// console.log(someFunc([2,6,14,12,18,33]));

// const everyFunc = (arr)=> {
//     return arr.every((item)=>{
//         return item > 1
//     }) 
// }
// console.log(everyFunc([2,6,14,12,18,33]));

// SORT

// const sortFunc = (arr) => {
//     return arr.sort((a, b) => a - b);
// }
// console.log(sortFunc([2, 16, 29, 93, 27, 11]));

// const func = (arr) => {
//     return arr.map((item, index, array)=> {
//         return item * 2 
//     }).filter((item, index, array)=> {
//         return !isNaN(item);
//     })

// }
// console.log(func(['Ivan', 5, 7, '10']));

// const func = (arr) => {
//     return arr.map((item, index, array)=> {
//         return item * 2 
//     }).filter((item, index, array)=> {
//         return isFinite(item);
//     }).map((item)=> {
//         return item % 5
//     }).some((item) => {
//         return item > 0
//     })

// }
// console.log(func(['Ivan', 5, 7, '10']));
   

// const func = (arr) => {
//     return arr.filter((item, idx) => {
//         let count = 0;
//         item = item.split('');
//         item.forEach((letter)=>{
//             if(letter.toUpperCase() === letter ){
//                 count += 1
//             }
//         })
//         return count >= 3
//     })


// }
// console.log(func(['BMW', 'MErs', 'HoNDA', 'Lexus', 'SuBaRu']));

// const func = (arr) => {
//     return arr.filter((item) => {
//        return item.split('').filter((el) => el === el.toUpperCase().length >= 3)
//     });


// }
// console.log(func(['BMW', 'MErs', 'HoNDA', 'Lexus', 'SuBaRu'])); // *********************************************

// const func = (arr) => {
//     let newArr = [];
//     for(let key in arr){
//         newArr = [...newArr, arr[key]]
//     }
//     return newArr
// }
// console.log(func({id: 1, name: 'Max', stack: 'React'}));

// const func = (arr) => {
//     // return Object.values(arr)
//     //  return Object.keys(arr)
//     return Object.entries(arr)
// }
// console.log(func({id: 1, name: 'Max', stack: 'React'}));

// const  func = (arr) => {
//     return arr.filter((item) => {
//         return item.name === 'Muslim'
//     })

// }
// console.log(func([{id: 1, name: 'Max'}, {id: 2, name: 'Alisher'}, {id: 3, name: 'Muslim'}]));

// const func2 = ()=> {
//     return 'callback123'
// }

// const func1 = (callback)=>{
//    return callback()
// }

// console.log(func1(()=> 'callback123'));

// const mapFunc = (arr)=>{
//     return arr.map((item, idx, array)=> item * 2);
// }
// console.log(mapFunc([1,2,3,4,5,6]));



// const mapFunc = (arr)=>{
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr = [...newArr, arr[i] * 2];
//     }
//     return newArr;
// }

// const mapFunc = (arr)=> {
//     return arr.map((item, idx, array)=> item * 2)
// }
// console.log(mapFunc([1,2,3,4,5,6,7,7,8,89]));

// const mapFunc = (arr) => {
//     return arr.map(item => typeof(item));
// }
// console.log(mapFunc([1, 'Ivan', true, 4, []]));

// const mapFunc = (arr) => {
//     return arr.map((item, idx, array) => {
//         if(typeof item === 'number' || typeof item === 'string'){
//             return null
//         }
//         return item
//     } )
// }
// console.log(mapFunc([1, 'Ivan', true, 4, []]));

// const mapFunc = (arr) => {
//     return arr.map(item => item.length);
// }
// console.log(mapFunc(['Ivan', 'abraCadabra', 'Maria', 'Lexus']));

// const mapFunc = (arr, num) => {
//     return arr.map((item, idx, array) =>{
//        return `${item} кратность ${num} = ${item % num}`
//     })
// }
// console.log(mapFunc([15, 12, 18, 20, 45], 5));



// FILTER() - RETURN ONLY TRUE

// const filterFunc = (arr)=> {
//     return arr.filter((item) => {
//         return item !== 5
//     });

// }

// const filterFunc = (arr)=> {
//     return arr.filter(item => item < 5);
// }
// console.log(filterFunc([5,1,2,3,4,5]));

// const filterFunc = (arr)=>{
//     return arr.filter(item => !item.includes('привет'));
// }
// const filterFunc = (arr)=> {
//     return arr.filter(item => item.indexOf('привет') < 0);
// }
// console.log(filterFunc(['привет', 'привет мир', 'мир', 'привет страна']));

// const filterFunc = (arr) => {
//     return arr.filter((item, idx)=>{
//         if(typeof item === 'string'){
//             return item.length > 3
//         }
//         return item > 10
//     });

// }
// console.log(filterFunc(['Ivan', 'Max', 'Akdil', 10, 15, 20]));

// FIND()

// const findFunc = (arr)=> {
//     return arr.find((item, idx, array)=> {
//         return item === 10
//     });
// }
// console.log(findFunc([1,2,1,4,5,6,]));  // return el or undefined

// FindIndex

// const findIndex = (arr) => {
//     return arr.findIndex(item => {
//         return item > 20
//     });

// }
// console.log(findIndex([1,2,3,4,6,7,8,9])); // return idx or -1


//  SOME()

// const someFunc = (arr)=> {
//     return arr.some(item => item > 10);
// }
// console.log(someFunc([1,2,3,7]));  // return true or false


// const everyFunc = (arr) => {
//     return arr.every(item => item > 3)
// }
// console.log(everyFunc([1,2,3,7]));  // return true or false


// SORT()

// const sortFunc = (arr) => {
//     return arr.sort((a, b) => b - a);
// }
// console.log(sortFunc([1,12,4,25,26,56,71]));

// const task = (arr)=>{
//     return arr.find((item, idx, array)=>{
//         return item == 2
//     });

// }


// console.log(task([1,2,3,4,5,6]));

// const taskFindIndex = (arr)=> {
//     return arr.findIndex((item, idx, array)=>{
//         return item === 'Ivan'
//     })

// }
// console.log(taskFindIndex(['Ivan', 'Maks', 'Maria', 'Lola']));

// const taskFind = (arr)=>{
//     return arr.find((item, idx, array)=>{
//         return idx > 2 && typeof item === 'string'
//     })
// }
// console.log(taskFind([1, 'Ivan', 2,true,'Max', false]));

// const task = (arr)=>{
//     return  arr.filter((item)=>{
//         return item.split('').find((el)=>{
//             return el === el.toUpperCase();
//         })
//     })
// }
// console.log(task(['Max', 'Lexus', 'bmw', 'Subaru']));


// task 8

// const task8 = (arr)=>{
//    return  arr.map((item)=>{
//         if(item % 3 === 0 && item % 5 === 0){
//             return 0
//         }
//         return item ** 3
//     })
// }
// console.log(task8([7,8,15,30,2]));


// Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
// Output: [3,7]
// Input: [1,7], [9,3]
// Actions:
// Output: [10, 10]

// const task1 = (arr1, arr2)=>{
//     return arr1.map((item, idx)=>{
//         return item + arr2[idx]
//     })
// }
// console.log(task1([2,4], [1,3]));

// const task1 = (arr1, arr2)=>{
//     return arr1.map((item, idx)=>{
//         return item + arr2[idx]
//     })
// }
// console.log(task1([2,4], [1,3]));


// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]
// Input: [7,14]
// Output: [14,28]

// const task2 = (arr) => {
//     return arr.map(item => item * 2)
// }
// console.log(task2([1,2,3,4,5]));
// console.log(task2([7,14]));


// const task2 = (arr)=>{
//     return arr.map(item => item * 2)

// }
// console.log(task2([1,2,3,4,5]));
// console.log(task2([7,14]));

// Task 3
// Напишите функцию, которая принимает массив объектов с полем id. Например [{id: '100'}, {id: 2}] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
// Input: [{id: true}]
// Output: [true]

// const task3 = (arr) =>{ /// *******************************
//     return arr.map(item => {
//         return [item[id]]
//     });
// }
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]));
// console.log(task3([{id: true}]));







// const task3 = (arr)=>{
//     return arr.map((item)=>{
//         return  Object.values(item);
//     }).flat()
// }
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]));



// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <div>{number}</div>
// Input: [1,2]
// Output: ['<div>1</div>','<div>2</div>']
// Input: ['Anakin']
// Output: ['<div>Anakin</div>']

// const task4 = (arr)=>{
//     return arr.map(item => `<div>${item}</div>`);
// }
// console.log(task4([1,2]));
// console.log(task4(['Maria']));


// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
// Input: ['abc','abcde']
// Output: []

// const task5 = (arr)=>{
//     return arr.filter(item => item.length % 2 === 0)
// }
// console.log(task5(['ab','abc','abcd']));
// console.log(task5(['abc','abcde']));

// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
// Input: [1,2,3,7,9,4]
// Output: []

// const task6 = (arr)=>{
//     return arr.map(item => item * 2).filter((el)=> el % 10 === 0);
// }
// console.log(task6([1,2,3,7,10,5]));
// console.log(task6([1,2,3,7,9,4]));


// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
// Input: [false,true]
// Output: [true]

// const task7 = (arr) =>{
//     return arr.reduce((acc, rec, idx, array)=>{
//         return acc || rec
//     })
// }

// console.log(task7([true,false,true,true]));
// console.log(task7([false, true]));

// const task7 = (arr) => {
//     return arr.filter(item => item)
// }

// const task7 = (arr)=>{
//     return arr.filter(item => !!item);
// }
// console.log(task7([true,false,true,true]));
// console.log(task7([false,true]));



// Task 8
// Напишите функцию, которая принимает массив значений в тч и значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]
// Input: [undefined, true, undefined]
// Output: [true]

// const task8 = (arr) => {
//     return arr.filter(item => item !== undefined)
// }

// const task8 = (arr)=>{
//     return arr.filter(item => item !== undefined);
// }
// console.log(task8([true, false, true,true, undefined, true, undefined]));
// console.log(task8([undefined, true, undefined]));




// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18

// const task9 = (arr)=> {
//     return arr.reduce((acc, rec, idx)=>{
//         return acc + rec
//     }, 0)
// }


// const task9 = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         return acc += rec
//     })
// }
// console.log(task9([1,2,3,4,5]));
// console.log(task9([2, 11, 5]));

// Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логичского И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true
// Input: [true,false,true]
// Output: false

// const task10 = (arr) => {
//     return arr.reduce((acc, rec, idx)=> {
//         return acc && rec
//     })
// }

// const task10 = (arr)=>{ 
//     return arr.reduce((acc, rec)=>{
//         return acc && rec
//     })
// }
// console.log(task10([true,true,true,true]));
// console.log(task10([true,false,true]));

// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}


const task11 = (arr)=> { // **************************
    return arr.reduce((acc, rec, idx, array)=>{
        return {...acc, `field${[idx + 1]}: ${rec}`}
    }, {})
}
console.log(task11([true,1,'wow','you are smart, bro']));



// Task 12
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'pilot', isActive: true }
// Actions:
// Output: { name: 'pilot' }
// Input: { isActive: true }
// Actions:
// Output: {}




// Task 13
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false
// Input: { isActive: false, isPilot: true }
// Actions:
// Output: ['isActive']


// Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Actions:
// Output: 5
// Input: [2, 4]
// Actions:
// Output: 3

// Task 15
// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.Например[(a) => a+ 1,(a) => a * 2],5
// 5 начальное значение.Сначала запускается функция с ((a) => a+ 1)(5). Результат будет 6. теперь 6 используется во второй функции((a) => a * 2)(6)
// Итог 12
// Количество функций в начальном массиве не ограниченоЧтобы решить эту задачу - четко решите, что будет являться аккумулятором, что будет являться ресивером в редьюсе. Какие у них типы. Как пройдет редьюс в первом шаге и что он вернет.Задача решается в одну строчку, но тяжела для понимания. Ключ решения - ясность.
// Input: [ (a) => a+ 1, (a) => a * 2 ], 5
// Actions:
// Output: 12
// Input: [ (a) => a - 1, (a) => a * 2 ], 5
// Actions:
// Output: 8
// Input: [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3
// Actions:
// Output: 20

// Task1
// На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

// input: [1, 2, 3]
// output: [2, 4, 6]
// input: [4, 1, 1, 1, 4]
// output: [8, 2, 2, 2, 8]
// input: [2, 2, 2, 2, 2, 2]
// output: [4, 4, 4, 4, 4, 4]


// const task1 = (arr)=>{
//     return arr.map(item => item * 2)
// }
// console.log(task1([1, 2, 3]));
// console.log(task1([4, 1, 1, 1, 4]));
// console.log(task1([2, 2, 2, 2, 2, 2]));


// -------------------------------------------------------------------------

// Task2
// Напишите функцию, которая будет удалять каждый второй элемент в массиве. Цикл for использовать запрещено!

// input: ['Привет', 'Пока', 'Снова привет']
// output: ['Привет', 'Снова привет']
// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output: [1, 3, 5, 7, 9]
// input: ['Пока', {'Цвет': 'Синий'}]
// output: ['Пока']


// const task2 = (arr)=>{
//     return arr.filter((item, idx)=>{
//         if( idx % 2 === 0 ) return  item 
//     })
// }
// console.log(task2(['Привет', 'Пока', 'Снова привет']));
// console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(task2(['Пока', {'Цвет': 'Синий'}]));



// -------------------------------------------------------------------------

// Task3
// Возьмите массив с числами, а верните массив, в котором отрицательные числа, становятся положительными, а положительные - отрицательными.

// input: [1, 2, 3, 4, 5]
// output: [-1, -2, -3, -4, -5]
// input: [1, -2, 3, -4, 5]
// output: [-1 ,2, -3, 4, -5]
// input: []
// output: []
// input: [0]
// output: [0]

// const task3 = (arr)=> {
//     return arr.map(item=>{
//         if(item === 0){
//             return 0
//         }
//         return -item 
//     })
// }
// console.log(task3([1, 2, 3, 4, 5]));
// console.log(task3([1, -2, 3, -4, 5]));
// console.log(task3([]));
// console.log(task3([0]));


// -------------------------------------------------------------------------

// Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.

// // input: [0, 1, 2, 3, 5, 8, 13], 3
// // output:  [0, 1, 2], 'Вернула первые три значения'
// // input: [0, 1, 2, 3, 5, 8, 13], 5
// // output:  [0, 1, 2, 3 , 5]

// const task4 = (arr, num)=>{  
//     return arr.slice(0, num);
// }
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5));


// -------------------------------------------------------------------------

// Task5
// Вернуть новый массив, состоящий из элементов, кратных их собственному индексу во входном массиве.

// input: [22, -6, 32, 82, 9, 25]
// output: [-6, 32, 25])
// input: [68, -1, 1, -7, 10, 10]
// output: [-1, 10]
// input: [11, -11]
// output [-11]

// const task5 = (arr)=>{
//     return arr.filter((item, idx)=>{
//         return item % idx === 0
//     });
// }
// console.log(task5([22, -6, 32, 82, 9, 25]));
// console.log(task5([68, -1, 1, -7, 10, 10]));
// console.log(task5([11, -11]));


// -------------------------------------------------------------------------

// Task6
// Напишите функцию, которая принимает на вход массив,
//  и возвращает новый, в котором все элементы типа string заменены на null.
 
// input: [4, 6, 'Ivan', 5, 'Denis '] 
// output: [4, 6, null, 5 , null]

// const task6 = (arr)=> {
//     return arr.map((item)=>{
//         if(typeof item === 'string'){
//             return null
//         }
//         return item
//     })
// }
// console.log(task6([4, 6, 'Ivan', 5, 'Denis '] ));

// -------------------------------------------------------------------------

// Task7
// Напишите функцию, которая принимает на вход массив с именами ,
// и возвращает новый, в котором содержатся имена не длиннее 5 символов. 

// input: ['Евдоким','Ivan', 'Игнат', 'Denis'] 
// output: ['Ivan', 'Игнат', 'Denis'] 

// const task7 = (arr)=> {
//     return arr.filter((item)=>{
//         return item.length <= 5
//     })
// }
// console.log(task7(['Евдоким','Ivan', 'Игнат', 'Denis'] ));



// -------------------------------------------------------------------------

// Task8
// Напишите функцию, которая принимает на вход массив чисел, 
// и возвращает новый, в котором все элементы возведены в куб, и те числа, 
// которые кратны и трем и пяти одновременно, заменить их на 0. 

// input: [7, 8, 15, 30, 2] 
// output: [ 343, 512, 0, 0, 8 ] 

// const task8 =(arr)=>{
//     return arr.map((item)=>{
//         if(item % 3 === 0 && item % 5 === 0){
//             return 0
//         }
//         return item ** 3
//     })

// }
// console.log(task8([7, 8, 15, 30, 2]));

// -------------------------------------------------------------------------

// Task9
// Напишите функцию, которая принимает на вход массив слов , 
// и возвращает массив чисел, являющихся длинной слов. 

// input: ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] 
// output: [6, 6, 5, 5, 6] 


// const task9 = (arr)=>{
//     return arr.map(item => item.length);
// }
// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ));
// -------------------------------------------------------------------------

// Task10
// Напишите функцию, которая принимает массив чисел 
// и возвращает массив строк по шаблону <div>{number}</div> 

// input: [1, 2, 3, 4, 5 ] 
// output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ] 

// const task10 = (arr)=> {
//     return arr.map(item => `<div>${item}</div>`);
// }
// console.log(task10([1, 2, 3, 4, 5 ]));


// -------------------------------------------------------------------------

// Task11
// Напишите функцию, которая принимает массив строк 
// и возвращает массив строк с четным количеством букв 

// Input: ['ab', 'abc', 'abcd'] 
// Output: ['ab', 'abcd']


// const task11 = (arr)=>{
//     return arr.filter(item =>{
//       if(item.length % 2 === 0 ) return item    
//     })
// }
// console.log(task11(['ab', 'abc', 'abcd']));

// 1. Напишите функцию JavaScript, чтобы проверить, является ли «вход» массивом или нет. Перейдите в редактор Test Data : console.log(is_array('w3resource')); console.log(is_array([1, 2, 4, 0])); false true

// const is_array = (str) =>{
//     if(Array.isArray(str)){
//         return true
//     }
//     return false

// }
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]))

// 2. Напишите функцию JavaScript для клонирования массива. Перейдите в редактор
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// const cloneArray = (arr) =>{
//     return arr.slice(0);

// }
// console.log(cloneArray([1, 2, 4, 0]));
// console.log(cloneArray([1, 2, [4, 0]]));

// 3. Напишите функцию JavaScript для получения первого элемента массива. Передача параметра «n» вернет первые «n» элементов массива. Перейдите в редактор
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(первый([],3));
// console.log(первый([7, 9, 0, -2],3));
// console.log(первый([7, 9, 0, -2],6));
// console.log(первый([7, 9, 0, -2], -3));
// Ожидаемый результат :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// task 8
// const task8 = (arr)=>{
//     return arr.map((item)=> {
//         if(item % 3 === 0 && item % 5 === 0){
//             return 0
//         }
//         return item ** 3
//     })


// }
// console.log(task8([7,8,15,30,2]));


// task 4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.

// // input: [0, 1, 2, 3, 5, 8, 13], 3
// // output:  [0, 1, 2], 'Вернула первые три значения'
// // input: [0, 1, 2, 3, 5, 8, 13], 5
// // output:  [0, 1, 2, 3 , 5]
// const task4 = (arr, num)=>{
//     return arr.filter((item, idx)=>{
//         return idx < num
//     })
// }
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5));


// task 5
//  Напишите простую программу на JavaScript для объединения всех элементов следующего массива в строку. Перейти в редактор
// Пример массива : myColor = ["Красный", "Зеленый", "Белый", "Черный"];
// Ожидаемый результат :
// «Красный, зеленый, белый, черный»
// «Красный, зеленый, белый, черный»
// «Красный + зеленый + белый + черный»

// const joinArrayWithSeparator = (arr) =>{
//     return arr.split(',').join(' +');
// }
// console.log(joinArrayWithSeparator('Красный, зеленый, белый, черный'));

// task 6
// Напишите программу на JavaScript, которая принимает число в качестве входных данных и вставляет дефисы (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, вывод должен быть 0-254-6-8.

// const task6 = (str)=>{
//     return str.split('').map((item, idx, array)=>{
//         if(+item % 2 === 0 && +array[idx + 1] % 2 === 0){
//             return `${item}-`
//         }
//         return item
//     }).join('')

// }
// console.log(task6('025468'));
// console.log(task6('328839422'));

// task 7
// 7. Напишите программу на JavaScript для сортировки элементов массива. Перейти в редактор
// Пример массива : var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// Пример вывода : -4,-3,1,2,3,5,6,7,8

// const arraySort = (arr)=>{
//     return arr.sort((a, b) => a - b);

// }
// console.log(arraySort([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

// task 8 **********************************************************************************************************
// 8. Напишите программу на JavaScript для поиска наиболее часто встречающегося элемента массива. Перейти в редактор
// Пример массива : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Пример вывода : a (5 раз)


// 9. Напишите программу на JavaScript, которая принимает на вход строку и меняет регистр каждого символа. Например, если вы вводите «Быстрый коричневый лис», вывод должен быть «БЫСТРЫЙ КОРИЧНЕВЫЙ ЛИС»

// 14. Напишите программу на JavaScript для удаления повторяющихся элементов из массива (игнорируйте регистр). 

// 1
// const task14 = (arr)=>{
//     return arr.filter((item, idx, array)=>{
//         return array.filter(elem =>{
//             return item === elem
//         }).length < 2
//     })

// }
// console.log(task14([4,5,4,2,3,1,5,2]));

//2
// const task14 = (arr)=>{
//     return arr.filter((item, idx, array)=>{
//         return array.indexOf(item, idx + 1) === -1 && array.lastIndexOf(item, idx -1) === -1
//     })

// }
// console.log(task14([4,5,4,2,3,1,5,2]));

// 17. Напишите программу на JavaScript для перемешивания массива.

// const changeOrderInArray = (arr) =>{
//     let newArr = [];
//     arr.map((item)=>{
//         if(Math.round(Math.random()+ 1) === 2){
//             newArr = [...newArr, item]
//         }else{
//             newArr = [item, ...newArr];
//         }
//     })
//     return newArr


// }
// console.log(changeOrderInArray([1,2,3,4,5]));

// 24. Напишите функцию JavaScript для удаления. 'null', '0', '""', 'false', 'undefined' и 'NaN' значения из массива. Перейти в редактор
// Пример массива: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Ожидаемый результат: [15, -22, 47]

// const deleteEveryEmptyElem = (arr)=>{
//     return arr.filter(item =>{
//         if(item){
//             return item
//         }
//     })
// }
// console.log(deleteEveryEmptyElem([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// 26. Напишите программу на JavaScript для поиска пары элементов (индексов двух чисел) из заданного массива, сумма которых равна определенному целевому числу. Перейти в редактор

// Ввод: числа= [10,20,10,40,50,60,70], цель=50
// Вывод: 2, 3

// const findInxOfSum = (arr, goal)=>{
//     let newArr = [];
//      arr.map((item, idx, array)=>{
//         if(item + array[idx + 1] === goal){
//             newArr = [...newArr, `${idx} - ${idx+1}`]
//         }
//     })
//     return newArr

// }


// console.log(findInxOfSum([10, 20, 10, 40, 50, 60, 70], 50)); // ['2 - 3']


// const findInxOfSum = (arr, goal)=>{
//     let newArr = []
//     arr.map((item, idx, array)=>{
//         arr.map((el, index )=>{
//             if(item + el === goal && idx < index ){
//                 newArr = [...newArr, `${idx}-${index}`]
//             }
//         })
//     })
//     return newArr

// }
// console.log(findInxOfSum([4,1,3,7,8,5,6,4], 12));
//  output :['0,4 - 3,5 - 4,7']

// 9. Напишите программу на JavaScript, которая принимает на вход строку и меняет регистр каждого символа. Например, если вы вводите «Быстрый коричневый лис», вывод должен быть «БЫСТРЫЙ КОРИЧНЕВЫЙ ЛИС».

// const task9 = (str) =>{
//     return str.split('').map(item=>{
//         if(item === item.toLowerCase()){
//             return item.toUpperCase()
//         }
//         return item.toLowerCase()
//     }).join('')
// }
// console.log(task9('Быстрый коричневый лис'));
// console.log(task9('БЫСТРЫЙ КОРИЧНЕВЫЙ ЛИС'));
// console.log(task9('БысТрый КоРичневый Лис'));

// 14.  Напишите программу на JavaScript для удаления повторяющихся элементов из массива (игнорируйте регистр).

// const task14 = (arr)=> {
//     return arr.filter((item, idx, array)=>{
//       return  array.filter((elem)=>{
//         return  item == elem
//       }).length < 2
//     })
// }
// console.log(task14([4,5,4,2,3,1,5,2]));

// const task14 = (arr) => {
//     return arr.filter((item, idx, array)=>{
//         return array.indexOf(item, idx + 1) === -1 && array.lastIndexOf(item, idx - 1) === -1
//     })
// }

// console.log(task14([4,5,4,2,3,1,5,2]));


// 17. Напишите программу на JavaScript для перемешивания массива.
// const task17 = (arr)=>{
//     let newArr = [];
//     arr.map((item, idx, array)=>{
//         if(Math.round(Math.random() + 1) === 2){
//             newArr = [...newArr, item]
//         }else{
//             newArr = [item, ...newArr]
//         }
//     })
//     return newArr
    
// }
// console.log(task17([1,2,3,4,5]));


// 24. Напишите функцию JavaScript для удаления. 'null', '0', '""', 'false', 'undefined' и 'NaN' значения из массива. Перейти в редактор
// Пример массива: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Ожидаемый результат: [15, -22, 47]

// const task24 = (arr)=> arr.filter(item => item );
// console.log(task24([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 26. Напишите программу на JavaScript для поиска пары элементов (индексов двух чисел) из заданного массива, сумма которых равна определенному целевому числу. Перейти в редактор

// Ввод: числа= [10,20,10,40,50,60,70], цель=50
// Вывод: 2, 3

// const task26 = (arr, goal)=>{
//    return arr.reduce((acc, rec, idx, array)=>{
//         if(rec + array[idx + 1] === goal){
//             return  [...acc, `${idx}, ${idx + 1}`]
//         }
//         return acc
//    }, [])
// }
// console.log(task26([10,20,10,40,50,60,70], 50));

// const task26 = (arr, goal)=>{
//     let newArr = [];
//     arr.map((item, idx, array)=>{
//         array.map((el, index)=>{
//             if(item + el === goal && idx < index){
//                 return newArr = [...newArr, `${idx}-${index}`]
//             }
//         })
//     })
//     return newArr
// }
// console.log(task26([10,20,30,10,40,50,60,70], 50));

















