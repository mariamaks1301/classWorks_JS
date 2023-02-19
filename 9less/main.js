// REDUCE

// [1, 2, 3, 4, 5, 6] = [2, 4, 6, 8, 10, 12];

// const calcSum = (arr) => {
//     let sum = 0;
//     arr.map((item)=>{
//         sum += item
//     })
//     return sum

// }
// console.log(calcSum([1, 2, 3, 4, 5, 6]));

// ['Ivan', 'car', true] = { 0 : 'Ivan', 1 : 'car', 2 : true}

// const setObj = (arr) => {
//     let obj = {}
//     arr.map((item, index) => {
//         obj = {...obj, [index] : item}
//     })
//     return obj

// }
// console.log(setObj(['Ivan', 'car', true]));

// const calcSum = (arr) => {
//     return arr.reduce((acc, rec) =>{
//         return  acc + rec
//     }, 0)
    
    
// }
// console.log(calcSum([1,2,3,4,5,6]));


// const calcArr = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, []);

// }
// console.log(calcArr([1,2,3,4,5,6]));

// [1,2,true,'Max','Ivan'] = ['Ivan','Max']

// const filterArr = (arr) => {
//     return arr.filter((item)=> {
//         return typeof item === 'string'
//     })

// }
// console.log(filterArr([1,2,true,'Max','Ivan']));

// const filterArr = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if(typeof rec === 'string'){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])


// }
// console.log(filterArr([1,'Ivan',2,6,true,'Max']));

// Task1
// На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

// input: [1, 2, 3]
// output: [2, 4, 6]
// input: [4, 1, 1, 1, 4]
// output: [8, 2, 2, 2, 8]
// input: [2, 2, 2, 2, 2, 2]
// output: [4, 4, 4, 4, 4, 4]



//     const dubleItem = (arr)=>{
//         return arr.reduce((acc, rec)=>{
//             return [...acc, rec * 2]
//         }, [])
//     }
    

// console.log(dubleItem([1, 2, 3]));
// console.log(dubleItem([4, 1, 1, 1, 4]));
// console.log(dubleItem([2, 2, 2, 2, 2, 2]));

// const task1 = (arr)=> {
//     return arr.reduce((acc, rec)=> {
//         return [...acc, rec * 2]
//     }, [])

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

// const deleteEverySecondElement = (arr)=> {
//     return arr.reduce((acc, rec, idx)=>{
//         if(idx % 2 === 0){
//             return [...acc, rec]
//         }
//         return acc
//     },[])
// }
// console.log(deleteEverySecondElement(['Привет', 'Пока', 'Снова привет']));
// console.log(deleteEverySecondElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(deleteEverySecondElement(['Пока', {'Цвет': 'Синий'}]));


// const task2 = (arr) => {
//     return arr.reduce((acc, rec, index) =>{
//          if(index % 2 === 0){
//             return [...acc, rec]
//          }
//          return acc
//     }, [])
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

// const changeDigits = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(rec === 0){
//             return [...acc, 0]
//         }
//         return [...acc, -rec]
//     }, [])
// }
// console.log(changeDigits([1, 2, 3, 4, 5]));
// console.log(changeDigits( [1, -2, 3, -4, 5]));
// console.log(changeDigits([]));
// console.log(changeDigits([0]));


// const task7 = (arr) => {
//     return arr.reduce((acc, rec) =>{
//         return [...acc, -rec]
//     }, [])
    

// }
// console.log(task7([1, 2, 3, 4, 5]));
// console.log(task7([1, -2, 3, -4, 5]));
// console.log(task7([]));
// console.log(task7([0]));



// -------------------------------------------------------------------------

// Task4
// Напишите функцию, которая принимает в качестве аргументов 2 параметра: массив и число, а возвращает новый массив с тем кол-вом элементов с начала массива, которое было указано в числе.

// input: [0, 1, 2, 3, 5, 8, 13], 3
// output:  [0, 1, 2], 'Вернула первые три значения'
// input: [0, 1, 2, 3, 5, 8, 13], 5
// output:  [0, 1, 2, 3 , 5]


// const amountOfElements = (arr, num)=>{
//     return arr.reduce((acc, rec, idx, array)=>{
//         if(idx < num){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(amountOfElements([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(amountOfElements([0, 1, 2, 3, 5, 8, 13], 5));




// const task4 = (arr, num) => {
//     return arr.reduce((acc, rec, index)=> {
//         if(index < num){
//             return [...acc, rec]
//         }
//         return acc
        
//     }, [])
    
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



// const arrPowHisNumber = (arr)=>{
//     return arr.reduce((acc, rec, idx)=>{
//         if(rec % idx === 0){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(arrPowHisNumber([22, -6, 32, 82, 9, 25]));
// console.log(arrPowHisNumber([68, -1, 1, -7, 10, 10]));
// console.log(arrPowHisNumber([11, -11]));



// const task5 = (arr) => {
//     return arr.reduce((acc, item, idx) => {
//         if(item % idx === 0){
//             return [...acc, item]
//         }
//         return acc
//     }, [])


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

// const replaceItemString = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(typeof rec === 'string'){
//             return [...acc, null]
//         }
//         return [...acc, rec]
//     }, [])
// }
// console.log(replaceItemString([4, 6, 'Ivan', 5, 'Denis ']));



// const task6 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if(typeof rec === 'string'){
//             return [...acc, null]
//         }
//         return [...acc, rec]
//     }, [])

// }
// console.log(task6([4, 6, 'Ivan', 5, 'Denis '] ));

// -------------------------------------------------------------------------

// Task7
// Напишите функцию, которая принимает на вход массив с именами ,
// и возвращает новый, в котором содержатся имена не длиннее 5 символов. 

// input: ['Евдоким','Ivan', 'Игнат', 'Denis '] 
// output: ['Ivan', 'Игнат', 'Denis '] 

// const lengthOfName_5 = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(rec.length === 5){
//             return [...acc, rec]
//         }
//         return acc

//     }, [])
// }
// console.log(lengthOfName_5(['Евдоким','Ivan', 'Игнат', 'Denis']));

// const task7 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if(rec.length < 5){
//             return [...acc, rec]
//         }
//         return acc
      
        
//     }, [])
// }
// console.log(['Евдоким','Ivan', 'Игнат', 'Denis '] ); // ****************************************

// -------------------------------------------------------------------------

// Task8
// Напишите функцию, которая принимает на вход массив чисел, 
// и возвращает новый, в котором все элементы возведены в куб, и те числа, 
// которые кратны и трем и пяти одновременно, заменить их на 0. 

// input: [7, 8, 15, 30, 2] 
// output: [ 343, 512, 0, 0, 8 ] 

// const task8 = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(rec ** 3 % 5 === 0 && rec ** 3 % 3 === 0 ){
//             return [...acc, 0]
//         }
//         return [...acc, rec ** 3]
//     }, [])
// }
// console.log(task8([7, 8, 15, 30, 2]));

// const task8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if(rec ** 3 % 3 === 0 && rec ** 3 % 5 === 0){
//             return [...acc, 0]

//         }
//         return [...acc, rec ** 3]
//     }, [])

// }
// console.log(task8([7, 8, 15, 30, 2]));

// -------------------------------------------------------------------------

// Task9
// Напишите функцию, которая принимает на вход массив слов , 
// и возвращает массив чисел, являющихся длинной слов. 

// input: ['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] 
// output: [6, 6, 5, 5, 6] 

// const lengthOfWords = ( arr)=> {
//     return arr.reduce((acc, rec)=>{
//         return [...acc, rec.length]
//     }, [])
// }
// console.log(lengthOfWords(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));




//  const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.length]
//     }, [])

//  }
//  console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));

// -------------------------------------------------------------------------

// Task10
// Напишите функцию, которая принимает массив чисел 
// и возвращает массив строк по шаблону <div>{number}</div> 

// input: [1, 2, 3, 4, 5 ] 
// output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ] 


// const putNumberInDiv = (arr) =>{
//     return arr.reduce((acc, rec)=>{
//         return [...acc, `<div>${rec}</div>` ]
//     }, [])
// }
// console.log(putNumberInDiv([1, 2, 3, 4, 5 ]));


// const task10 = (arr) => {
//     return arr.reduce((acc, rec)=>{
//         return [...acc, '<div>' + rec + '</div>']
//     }, []);
// }
// console.log(task10([1, 2, 3, 4, 5 ]));

// -------------------------------------------------------------------------

// Task11
// Напишите функцию, которая принимает массив строк 
// и возвращает массив строк с четным количеством букв 

// Input: ['ab', 'abc', 'abcd'] 
// Output: ['ab', 'abcd']


// const filterOddStrings = (arr)=> {
//     return arr.reduce((acc, rec)=>{
//         if(rec.length % 2 === 0){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(filterOddStrings(['ab', 'abc', 'abcd']));

// const task11 = (arr) => {
//    return  arr.reduce((acc, rec)=> {
//         if(rec.length % 2 === 0){
//             return [...acc, rec];
//         }
        
//         return acc
//     }, [])
// }
// console.log(task11(['ab', 'abc', 'abcd']));

// -------------------------------------------------------------------------

// Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
// Output: [3,7]
// Input: [1,7], [9,3]
// Actions:
// Output: [10, 10]

// const calculateElemsForIdx = (arr1, arr2)=>{
//     return arr1.reduce((acc, rec, idx)=>{
//         return [...acc, rec + arr2[idx]]
//     }, [])
// }
// console.log(calculateElemsForIdx([2,4], [1,3]));
// console.log(calculateElemsForIdx([1,7], [9,3]));


// const task1 = (arr, arr2) => {
//     return arr.reduce((acc, rec, idx)=>{
//         return [...acc, rec + arr2[idx]]
//     }, []);

// }
// console.log(task1([2,4], [1,3]));




// Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]
// Input: [7,14]
// Output: [14,28]


// const multiplyElemOnTwo = (arr)=> {
//     return arr.reduce((acc, rec)=> {
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(multiplyElemOnTwo([1,2,3,4,5]));
// console.log(multiplyElemOnTwo([7,14]));


// const task2 = (arr)=> {
//     return arr.reduce((acc, rec)=> {
//         return [...acc, rec * 2]
//     }, []);

// }
// console.log(task2([1,2,3,4,5]));
// console.log(task2([7, 14]));



// Task 3
// Напишите функцию, которая принимает массив объектов с полем id. Например [{id: '100'}, {id: 2}] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
// Input: [{id: true}]
// Output: [true]


// const arrayFromId = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         console.log(arr[rec])
//         return [...acc, rec['id']]
//     }, [])
// }
// console.log(arrayFromId([{id: 1},{id: 2},{id: 3},{id: 4}]));


// const task3 = (arr)=> {
//     return arr.reduce((acc, rec)=>{
//         return [...acc, rec['id']];
//     }, []);
// }
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]));

// Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <div>{number}</div>
// Input: [1,2]
// Output: ['<div>1</div>','<div>2</div>']
// Input: ['Anakin']
// Output: ['<div>Anakin</div>']



// const task4 = (arr) => {
//     return arr.reduce((acc, rec, idx)=>{
//         return [...acc, `$<div>${rec}</div>`]
//     },[]);
// }
// console.log(task4([1,2]));
// console.log(task4(['Anakin']));


// Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
// Input: ['abc','abcde']
// Output: []

// const task5 = (arr)=> {
//     return arr.reduce((acc, rec, idx)=>{
//         if(rec.length % 2 === 0){
//             return [...acc, rec]
//         }
//         return acc
//     }, []);
// }
// console.log(task5(['ab','abc','abcd']));
// console.log(task5(['abc','abcde']));

// Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
// Input: [1,2,3,7,9,4]
// Output: []

// const task6 = (arr) => {
//     return arr.reduce((acc, rec)=>{
//         if((rec * 2) % 10 === 0){
//             return [...acc, rec * 2]
//         }
//         return acc
//     }, []);

// }
// console.log(task6([1,2,3,7,10,5]));
// console.log(task6([1,2,3,7,9,4]));

// Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
// Input: [false,true]
// Output: [true]


// const getArrayOfTrue = (arr)=> {
//     return arr.reduce((acc, rec)=>{
//         return rec ? [...acc, rec] : acc
//     }, [])
// }
// console.log(getArrayOfTrue([true,false,true,true]));
// console.log(getArrayOfTrue([false,true]));


// const task7 = (arr) =>{
//     return arr.reduce((acc, rec)=>{
//         if(rec === true){
//             return [...acc, rec]
//         }
//         return acc
//     }, []);
// }
// console.log(task7([true,false,true,true]));
// console.log(task7([false,true]));


// Task 8
// Напишите функцию, которая принимает массив значений в тч и значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]
// Input: [undefined, true, undefined]
// Output: [true]

// const getArrayWithoutUndefined = (arr)=> {
//     return arr.reduce((acc, rec)=>{
//         return rec !== undefined ? [...acc, rec] : acc
//     }, [])
// }
// console.log(getArrayWithoutUndefined([true, false, true,true, undefined, true, undefined]));
// console.log(getArrayWithoutUndefined([undefined, true, undefined]));


// const task8 = (arr) => {
//     return arr.reduce((acc, rec)=> {
//         if(rec !== undefined){
//             return [...acc, rec]
//         }
//         return acc
//     }, []);
// }
// console.log(task8([true, false, true,true, undefined, true, undefined]));
// console.log(task8([undefined, true, undefined]));


// Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18

// const getSumOfArray = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         return acc + rec
//     }, 0)
// }
// console.log(getSumOfArray([1,2,3,4,5]));
// console.log(getSumOfArray([2, 11, 5]));


// const task9 = (arr) => {
//     return arr.reduce((acc, rec)=>{
//         return acc += rec
//     }, 0);
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



// const task10 = (arr) => {   //********************************************************** */
//     return arr.reduce((acc, rec)=>{
//         if(arr[rec] === true){
//             return true
//         }
//         return false
//     }, Boolean);
// }
// console.log(task10([true,true,true,true]));
// console.log(task10([true, false, true]));

// Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}



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

// TAsk 1
// const task1 = (arr1, arr2)=>{
//     return arr1.map((item, idx)=> {
//         return item + arr2[idx]
//     });
// }
// console.log(task1([2,3], [1,4])); // [3,7];


// Task 2
// const task2 = (arr) => arr.map(item => item * 2);
// console.log(task2([2,3,1,4]));  // [4,6,2,8]

// Task3
// const task3 = arr=> arr.map(item => item['id']);
// const task3 = arr=> arr.map(item => item.id);
// console.log(task3([{id: '100'}, {id: 5}, {id: true}, {id: undefined}])); // [1,2,3,4];

// Task 12
// const task12 = (obj) => {
//     return Object.values(obj).filter((item)=> {
//         return typeof item[1] === 'string'
//     }).map((item)=>{
//         return {[item] : item[1]}
//     });

// }
// console.log(task12({name: 'pilot', isActive : true})); // {name: 'pilot'}

// const tasks = (arr)=> {
//     return arr.reduce((acc, rec, idx, array)=>{
//         return acc += rec;
//     }, 0)
// }
// console.log(tasks([1,2,3,4,5]));

// const tasks = (arr)=>{
//     // return arr.map(item => item + 2)

//     return arr.reduce((acc, rec)=> {
//         return [...acc, rec + 2];
//     }, []);
    
// }
// console.log(tasks([5,5,6,6]));

// const task = (arr, arr2) => {
//     return arr.reduce((acc, rec)=> {
//         return [...acc, rec + 2]
//     }, arr2);
// }
// console.log(task([5,5,6,6], [9,9])); // [9,9,7,7,8,8];

// task12
// const task12 = (arr) => {
//     return arr.reduce((acc, rec)=>{
//         if(rec < 5){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
    
// }
// console.log(task12([1,2,3,4,5,6,7,8,9]));



// // task12
// const task12 = (obj)=> {
//     return Object.keys(obj).reduce((acc, rec)=>{
//         if(typeof obj[rec] === 'string'){
//             return {...acc, [rec] : obj[rec]}
//         }
//         return acc

//     },{})

// }
// console.log(task12({name: 'Pilot', isActive: true, task: 'First'})); //{name: 'Pilot', task: 'First'}


// const task = (arr)=> {
//     return arr.map((item)=> item * 2)
// }
// console.log(task([2,3,4,5,6]));


// const task = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         return [...acc, rec * 2]
//     }, [])
// }
// console.log(task([2,3,4,5,6,7]));


// const task = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//        return  acc += rec
//     }, 0);

// }
// console.log(task([1,2,3,4,5,6,7]));

// const task = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(rec % 2 === 0){
//             return [...acc, rec]
//         }
//         return acc

//     }, [])

// }
// console.log(task([1,2,3,4,5,6,7,8]));

// const task = (arr, arr2)=>{
//     return arr.map((item, idx)=>{
//         return item += arr2[idx]
//     })

// }
// console.log(task([1,2], [3,4]))

// const task = (arr, arr2)=>{
//     return arr.reduce((acc, rec, idx)=>{
//         return [...acc, rec + arr2[idx]]
//     }, [])
// }
// console.log(task([1,2], [3,4]));

// const task = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         if(rec * 2 % 10 === 0 ){
//             return [...acc, rec * 2]
//         }
//         return acc

//     }, []);
// }
// console.log(task([1,2,3,7,10,5]));

// const task = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         return acc && rec
//     }, Boolean)
// }
// console.log(task([true, true, true, true]));
// console.log(task([false, true]));

// const  task = (arr)=>{
//     return arr.map((item)=>{
//         return item.id
//     })
// }
// console.log(task([{id : 1},{id : 2},{id : 3},{id : 4},{id : 5}]));

// Task 1
// Напишите функцию, которая принимает два массива чисел и возвращает массив чисел, которые есть в обоих массивах. Значения должны быть уникальны.
// Input: [1,2,3,4,5], [1,12,3,8,5]
// Output: [1,3,5]
// Input: [7,14, 14], [14,28]
// Output: [14]


// const uniqeElem = (arr1, arr2) =>{
//     return arr1.reduce((acc, rec) =>{
//         for(elem of arr2){
//             if(rec === elem){
//                 return new Set[...acc, rec]
//             }
//         }
//         return acc

//     }, []);

// }
// console.log(uniqeElem([1,2,3,4,5], [1,12,3,8,5]))

// Task 1
// Напишите функцию, которая принимает два массива чисел и возвращает массив чисел, которые есть в обоих массивах. Значения должны быть уникальны.
// Input: [1,2,3,4,5], [1,12,3,8,5]
// Output: [1,3,5]
// Input: [7,14, 14], [14,28]
// Output: [14]

// const task1 = (arr1, arr2)=>{
//     return arr1.reduce((acc, rec)=>{
//         for(let elem of arr2){
//             if(rec === elem){
//                 return new Set([...acc, rec]);
//             }
//         }
//         return acc
//     }, [])
// }
// console.log(task1([1,2,3,4,5], [1,12,3,8,5]));
// console.log(task1([7,14, 14], [14,28]));

// Task 2
// Напишите функцию, которая принимает массив объектов и возвращает объект с ключами взятыми из полей token и значения объекта. Каждый объект содержит уникальный ключ в token
// Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]
// Output: {'1': {token: 1}, '2':{token: 2, value:23}, '3':{token: 3, name:'superman'}, '4': {token: 4}}

// const task2  = (arr)=> {
//     return arr.reduce((acc, rec)=>{
//         return {...acc, [`${rec.token}`] : rec}
//     }, {})
// }
// console.log(task2([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));

// Task 3
// Напишите функцию, которая принимает массив строк и возвращает объект с ключом - строка и значением - количество повторений этой строки в первом объекте
// Input: ['a','b', 'a']
// Output: {a:2, b:1}
// Input: ['a','b', 'aa']
// Output: {a:1, b:1, aa:1}

// const task3 = (arr) => {
//     return arr.reduce((acc, rec, idx)=>{
//         if(acc[rec]){
//              acc[rec]++
//         }else{
//             acc[rec] = 1
//         }
//         return acc
//     }, {});
// }
// console.log(task3(['a','b', 'a']));
// console.log(task3(['a','b', 'aa']));

// Task 4
// Напишите функцию, которая принимает массив массивов и возвращает одноранговый массив
// Input: [['ab','abc'],['abcd']]
// Output: ['ab','abc','abcd']
// Input: [[1,2,3],[4,5],[6],[7,8,9]]
// Output: [1,2,3,4,5,6,7,8,9]

// const task4 = (arr)=>{
//     return arr.flat();
// }
// console.log(task4([['ab','abc'],['abcd']]));
// console.log(task4([[1,2,3],[4,5],[6],[7,8,9]]));

// const task4 = (arr)=>{
//     return arr.reduce((acc, rec)=>{
//         return [...acc.concat(rec)]
//     }, [])
// }
// console.log(task4([['ab','abc'],['abcd']]));
// console.log(task4([[1,2,3],[4,5],[6],[7,8,9]]));



// Task 5
// Напишите функцию, которая принимает объект и возвращает массив массивов состоящих из двух элементов [ключ, значение]
// Input: {a:1,b:2}
// Output: [['a',1], ['b',2]]
// Input: {a:1,b:2, c: true}
// Output: [['a',1], ['b',2], ['c', true]]

// const task5 = (obj) => {
//   return Object.entries(obj);
// }
// console.log(task5({a:1,b:2}));
// console.log(task5({a:1,b:2, c: true}));

// const task5 = (arr)=>{
//     return Object.keys(arr).reduce((acc, rec)=> {
//         return [...acc, [rec, arr[rec]]]
//     }, [])
// }
// console.log(task5({a:1,b:2}));
// console.log(task5({a:1,b:2, c: true}));



// Task 6
// Напишите функцию, которая принимает массив значений и возвращает массив без дубликатов
// Input: [true, false, true,true]
// Output: [true, false]
// Input: [1, true, 1]
// Output: [1, true]

// const task6 = (arr) => {
//    return arr.reduce((acc, rec, idx, array)=>{
//     if(array.indexOf(rec) === idx){
//         return [...acc, rec]
//     }
//     return acc
//    }, []);
// }
// console.log(task6([true, false, true,true]));
// console.log(task6([1, true, 1]));



// Task 7
// Напишите функцию, которая принимает имя поля, ключ и массив объектов и возвращает массив элементов у которых в заданном поле, есть значение ключа
// Input: 'title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}]
// Input: 'title', 'hellol', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: []

// const task7 = (key, value, arr)=> {
//     return arr.reduce((acc, rec)=>{
//        if(rec[key].includes(value)){
//         return [...acc, rec]
//        }return acc
       
        
//     }, [])

// }
// console.log(task7('title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]));

// Task 8
// Напишите функцию, которая принимает строку на входе и разбивает ее на токены, удаляет все пустые токены, возвращает массив объектов со значениями {id, token}
// Разбивать строку на токены надо по символу - /
// Input: http://google.com/hello/world
// Actions:
// Output: [{"id":0,"token":"http:"},{"id":1,"token":"google.com"},{"id":2,"token":"hello"},{"id":3,"token":"world"}]

// const task8 = (str)=> {
//     return str.split('/').filter(el => el.length).reduce((acc, rec, idx)=>{
//         console.log(rec)
//         return [...acc, {id: idx, token : rec} ]

//     }, [])

// }
// console.log(task8('http://google.com/hello/world'));

// Task 9
// Напишите функцию, которая принимает строку и возвращает новую строку, где после каждой фразы(между запятой) стоит в скобках длина этой фразы.
// См пример
// Используйте split, join, map
// Input: 'hello,world,abra,carabfa,re,wrewer,rwer'
// Actions:
// Output: "hello(5),world(5),abra(4),carabfa(7),re(2),wrewer(6),rwer(4)"

// const task9 = (str)=> {
//     return str.split(',').reduce((acc, rec)=> {
//         return acc + `${rec}(${rec.length})`
//     }, '')

// }
// console.log(task9('hello,world,abra,carabfa,re,wrewer,rwer'));

// Task 10
// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')
// Для решения задачи надо получить массив букв
// Добавить редьюс
// Начальное значение редьюса массив с пустой строкой
// Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву
// Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;
// Input: "abrac", 2
// Actions:
// Output: ["ab", "ra", "c"]
// Input: "abracadabra", 4
// Actions:
// Output: ["abra", "cada", "bra"]

// const task10 = (str, num)=> {
//     return str.split('').reduce((acc, rec, idx, array)=>{
//         return [...acc, array.slice(num * idx, num * (idx + 1)).join('')];
//     }, []).filter(el => el.length)
// }
// console.log(task10("abrac", 2));


