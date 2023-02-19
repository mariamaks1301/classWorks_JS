



















// Task 11
// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')
// Для решения задачи надо получить массив букв
// Добавить редьюс
// Начальное значение редьюса массив с пустой строкой
// Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву
// Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;
// Input: "abrac", 2
// Actions:
// Output: ["ab", "ra", "c"]
// Input: "abracadabra", 4
// Actions:
// Output: ["abra", "cada", "bra"]


// try catch


// try{
// let a = 5;
// let b = 10;

// console.log(a + b + c);

// }catch (err) {
//     // console.log('У тебя в коде баг');
//     // console.log(err.message); // the best way
//     // console.log(err.name);
//     // console.log(err.stack);
// } finally{
//     // console.log('Я работаю в любом случае');
// }

// let g = 10;
// console.log(g);

// let e = 20;
// console.log(e);

// try{
//     const mapFunc = (arr) =>{
//         return arr.map((item)=> {
//             return item * 2
//         })
//     }
//     console.log(mapFunc([1,2,3,4,5]));

// }catch(err){
//     console.log(`Ошибка в функции mapFunc ${err.message}`);

// }

// try{
//     const mapFunc = a => a;
//     console.log(mapFunc(5));

// }catch(err){
//     console.log();
// }

// try{
//     const mapFunc = (a) => {
//         return a > 5 ? 'a > 5' : 'a < 5'
//     }
//     console.log(mapFunc(5));

// }catch(err){
//     console.log(`${err.message}`);
// }

// try{
//     const mapFunc = arr=> arr.map(item =>item * 2);
//     console.log(mapFunc([1,2,3,4,5]));

// }catch(err){
//     console.log(`${err.message}`);

// }

// Task 1
// Напишите функцию, которая принимает два массива чисел и возвращает массив чисел, которые есть в обоих массивах. Значения должны быть уникальны.
// Input: [1,2,3,4,5], [1,12,3,8,5]
// Output: [1,3,5]
// Input: [7,14, 14], [14,28]
// Output: [14]

// try{
//     const dublicatFunc = (arr, arr2)=> {
//         return arr.filter((item, idx) => {
//             return arr2.includes(item)
//         }).filter((item, idx, array)=>{
//             return array.indexOf(item) === idx
//         })
//     }
//     console.log(dublicatFunc([5,1,2,3,4,5], [1,12,3,8,5]));

// }catch(err){
//     console.log(`${err.message}`);
// }

// try{
//     const dublicatFunc = (arr, arr2) =>{
//         return arr.filter((item, idx)=>{
//             return arr2.includes(item)
//         }).filter((item, idx, array)=>{
//             return array.indexOf(item) === idx
//         })

//     }
//     console.log(dublicatFunc([5,1,2,3,4,5], [1,12,3,8,5]));

// }catch(err){
//     console.log(err.message);
// }

// try{
//     const dublicatFunc = (arr, arr2) => {
//         return arr.filter((item)=>{
//             return arr2.includes(item);
//         }).filter((item, idx, array)=>{
//             return array.indexOf(item) === idx
//         })

//     }
//     console.log(dublicatFunc([7,14, 14], [14,28]));

// }catch(err){
//     console.log(err.message);
// }

// try{
//     const dublicatFunc = (arr, arr2) =>{
//         return arr.filter((item) => {
//             return arr2.includes(item);
//         }).filter((item, idx, array)=>{
//             return array.indexOf(item) === idx
//         })

//     }
//     console.log(dublicatFunc([7,14, 14], [14,28]));
//     console.log(dublicatFunc([1,2,3,4,5], [1,12,3,8,5]));

// }catch(err){
//     console.log(err.message);
// }

// try{
//     const dublicatFunc = (arr, arr2) => {
//         return new Set(arr.filter((item)=>{
//             return arr2.includes(item)
//         }))
//     }
//     console.log(dublicatFunc([7,14,14], [14,28]));
//     console.log(dublicatFunc([1,2,3,4,5],[1,12,3,8,5]));

// }catch(err){
//     console.log(err.message);
// }

// let arr = [1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,5];
// console.log(new Set(arr)); // в виде обьекта!!!!!

// let arr = [...new Set([1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,5])];
// console.log(arr);

// Task 2
// Напишите функцию, которая принимает массив объектов и возвращает объект с ключами взятыми из полей token и значения объекта. Каждый объект содержит уникальный ключ в token
// Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]
// Output: {'1': {token: 1}, '2':{token: 2, value:23}, '3':{token: 3, name:'superman'}, '4': {token: 4}}

// try{
//     const setObjInArray = (arr) => {
//         return arr.reduce((acc, rec) => {
//             return {...acc, [rec.token] : rec}

//         }, {})

//     }
//     console.log(setObjInArray([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));

// }catch(err){
//     console.log(err.message);
// }

// try{
//     const setObjInArray = (arr) => {
//         return arr.reduce((acc, rec)=>{
//             return {...acc, [rec.token] : rec}
//         }, {});

//     }
//         console.log(setObjInArray([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));
    
// }catch(err){
//     console.log(err.message);
// }

// try{
//     const setObjInArray = (arr) => arr.reduce((acc, rec) => {
//         return {...acc, [rec.token] : rec}
//      }, {});

    
//      console.log(setObjInArray([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));

// }catch(err){
//     console.log(err.message);
// }

// Task 3
// Напишите функцию, которая принимает массив строк и возвращает объект с ключом - строка и значением - количество повторений этой строки в первом объекте
// Input: ['a','b', 'a']
// Output: {a:2, b:1}
// Input: ['a','b', 'aa']
// Output: {a:1, b:1, aa:1}

// try{
//     const setObjInArray = (arr) => {
//         return arr.reduce((acc, rec)=>{
//             if(acc[rec]){
//                 return {...acc, [rec] : acc[rec] + 1}
//             }
//             return {...acc, [rec] : 1}
//         }, {})
//     }
//     console.log(setObjInArray(['a','b', 'a']));

// }catch(err){
//     console.log(err.message);
// }

// try{
//     const setObjInArray = (arr) => {
//         return arr.reduce((acc, rec)=>{
//             return acc[rec] ? {...acc, [rec] : acc[rec] + 1 } : {...acc, [rec] : 1}
//         }, {})

//     }
//     console.log(setObjInArray(['a','b', 'a']));
//     console.log(setObjInArray(['a','b', 'aa']));


// }catch(err){
//     console.log(err.message);
// }

// try{
//     const setObjInArray = arr => arr.reduce((acc, rec)=>{
//         return acc[rec] ? {...acc, rec : acc[rec] + 1} : {...acc, [rec] : 1}
//     }, {})
        
//     console.log(setObjInArray(['a','b', 'aa']));

// } catch(err){
//     console.log(err.message);
// }

// try{
//     const setObjInArray = arr => arr.reduce((acc, rec) => {
//         return acc[rec] ? {...acc, [rec] : acc[rec] + 1 } : {...acc, [rec] : 1}
//     }, {})


//     console.log(setObjInArray(['a','b', 'aa', 'a']));

// }catch(err){
//     console.log(err.message);

// }

// Task 4
// Напишите функцию, которая принимает массив массивов и возвращает одноранговый массив
// Input: [['ab','abc'],['abcd']]
// Output: ['ab','abc','abcd']
// Input: [[1,2,3],[4,5],[6],[7,8,9]]
// Output: [1,2,3,4,5,6,7,8,9]

// try{
//     const concatFunc = (arr) => {
//         return arr.reduce((acc, rec) => {
            
//             return [...acc, acc[rec].join()]
//         }, [])
//     }

//     console.log(concatFunc([['ab','abc'],['abcd']]));
// }catch(err){
//     console.log(err.message);
// }

// Task 5
// Напишите функцию, которая принимает объект и возвращает массив массивов состоящих из двух элементов [ключ, значение]
// Input: {a:1,b:2}
// Output: [['a',1], ['b',2]]
// Input: {a:1,b:2, c: true}
// Output: [['a',1], ['b',2], ['c', true]]

// try{
//     const task5 = (obj) => {
//         return obj.reduce((acc, rec)=>{
//             return [...acc, [rec.key]  [rec.velue]];
//         }, [])

//     }
//     console.log(task5({a:1,b:2}));

// }catch(err){
//     console.log(err.message);
// }


// Task 6
// Напишите функцию, которая принимает массив значений и возвращает массив без дубликатов
// Input: [true, false, true,true]
// Output: [true, false]
// Input: [1, true, 1]
// Output: [1, true]

// try{
//     const task6 = (arr) => {
//         return new Set(arr)

//     }
//     console.log(task6([true, false, true,true]));
//     console.log(task6([1, true, 1]));



// }catch(err){
//     console.log(err.message);
// }


// Task 7
// Напишите функцию, которая принимает имя поля, ключ и массив объектов и возвращает массив элементов у которых в заданном поле, есть значение ключа
// Input: 'title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}]
// Input: 'title', 'hellol', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]
// Output: []


// try{ 
//     const task7 = ()=> {

//     }
//     console.log(task7( 'title', 'hello', [{title:'hello world', rating: 1}, {title:'not a helloo', rating: 5}, {title:'new World', rating: 0}]));

// }catch(err){
//     console.log(err.message);
// }


// task 10
// Карирование. Напишите функцию, которая принимает строку и возвращает другую функцию, которая принимает строку и возвращает результат по шаблону ${arg1}/${arg2}
// Input: 'http://google.com'
// Actions: ('search')
// Output: 'http://google.com/search'


// Es-6

// let age = 25;
// let name = 'Maria ' + age;
// let name2 = `Maria ${age + 5}`;

// let name3 = `Maria ${age > 25 ? age : ''}`

// console.log(name);
// console.log(name2);
// console.log(name3);

// spread operator

// let arr = [1,2,3];
// let arr2 = [6,7];
// let arr3 = 5;

// arr = arr.concat(arr2);
// arr = [...arr, ...arr2];
// arr = [...arr, ...arr2, arr3];

// console.log(arr);

// let obj1 = {
//     name: 'Max'
// }
// let obj2 = {
//     age: 23
// }

// let obj3 = {...obj1, ...obj2};
// console.log(obj3);


// Rest operator

// const tasks = (a, ...other)=> {
//     return other // return array cause different type  in arguments
// }

// const tasks = (a, b, ...other)=>{
//     return [other, 101] // [[2,3,4,5,6], 101] - rest operator
// }

// const tasks = (a, b, ...other)=> {
//     return [...other, 101]; // return [2, 3, 4, 5, 6, 101] - spread operator
// }
// console.log(tasks(6, 'Max', 2,3,4,5,6));

// const obj = {
//     name : 'Max',
//     age: 23,
//     stack: 'React',
//     gender: 'men'
// }

// let {name, age, stack, gender} = obj; // деструктуризация!
// let {name, ...other} = obj;



// let name = obj.name;
// let age = obj.age;
// let stack = obj.stack;
// let gender = obj.gender;

// console.log(name);
// console.log(other);
// console.log(age);
// console.log(stack);
// console.log(gender);


// let name = 'Max';
// let age = 23;

// const person = {
//     name: name,
//     age: age,
//     stack: 'React',
//     gender: 'men'
// }

// const person = {
//     name,
//     age,
//     stack: 'React',
//     gender: 'men'
// }

// console.log(person);

// const task1 = (id, name, age, gender)=>{
//     return {id: id, name: name, age: age, gender: gender}
// }

// const task1 = (id, name, age, gender)=>{
//     return {id, name, age, gender}  // sign SHORT HAND
// }

// console.log(task1(1, 'Max', 23, 'men'));

// const task = (a = 5, b = 6)=>{
//     return a + b
// }
// console.log(task(10,16));

// task 6
// Напишите функцию которая принимает массив  и возвращает массив без дубликатов!
// Input: [true, false, true, true];
// Output : [true, false]
// Input : [1, true, 1]
// Output : [1, true]

// const task6 = (arr) =>{
//     return arr.filter((item, idx) =>{
//         return arr.indexOf(item) === idx
//     })

// }
// console.log(task6([true, false, true, true]));
// console.log(task6([1, true, 1]));

// const task6 = (arr)=>{ 
//   return arr.filter((item, idx)=>{
//     return arr.map((el)=>{
//         if(typeof el !== 'string'){
//             return JSON.stringify(el) // фильтрует объекты!!!!!
//         }
//         return el
//     }).indexOf(JSON.stringify(item)) === idx
//   });
// }

// const task6 = (arr)=>{
//     return [...new Set(arr)];
// }


// console.log(task6([true, false, true, true, 1, 1, 'false', {name: 'Max'}, {name: 'Max'}]));

// TASK 7
// Напишите функцию которая принимает имя поля, ключ и массив объектов и возвращает массив элементов у которыч в заданном поле, есть значение ключа.
// Input: 'title', 'hello',  [{title : 'hello world', rating : 1}, {title: 'not a hello', rating : 5}, {title: 'new world', rating : 0}, ]
// Output : [{title : 'hello world', rating : 1}, {title: 'not a hello', rating : 5}];
// Input: 'title', 'hellol',  [{title : 'hello world', rating : 1}, {title: 'not a hello', rating : 5}, {title: 'new world', rating : 0}, ]
// Output : []

// const task7 = (key, value, arr)=>{
//     return arr.filter((item)=>{
//         // return item.title.includes('hello')
//         return item[key].includes(value);
//     })

// }
// console.log(task7('title', 'hello',  [{title : 'hello world', rating : 1}, {title: 'not a hello', rating : 5}, {title: 'new world', rating : 0},]));
// console.log(task7('title', 'hellol',  [{title : 'hello world', rating : 1}, {title: 'not a hello', rating : 5}, {title: 'new world', rating : 0},]));


// Task 8
// Напишите функцию, которая принимает строку на входе и разбивает ее на токены, удаляет все пустые токены, возвращает массив объектов со значениями {id, token}Разбивать строку на токены надо по символу - /
// Input: http://google.com/hello/world
// Actions:
// Output: [{"id":0,"token":"http:"},{"id":1,"token":"google.com"},{"id":2,"token":"hello"},{"id":3,"token":"world"}]

// const task8 = (url)=>{
//     return url.split('/').filter((item)=>{
//         return item.length
//     }).map((item, idx)=>{
//         return {id: idx, token : item}
//     })
// }
// console.log(task8('http://google.com/hello/world'))

// Task 9
// Напишите функцию, которая принимает строку и возвращает новую строку, где после каждой фразы(между запятой) стоит в скобках длина этой фразы.См пример
// Используйте split, join, map
// Input: 'hello,world,abra,carabfa,re,wrewer,rwer'
// Actions:
// Output: "hello(5),world(5),abra(4),carabfa(7),re(2),wrewer(6),rwer(4)"

// const task9 = (str)=>{
//     return str.split(',').map((item)=>{
//         return `${item}(${item.length})`
//     }).join(',')
// }
// console.log(task9('hello,world,abra,carabfa,re,wrewer,rwer'));


// Task 11
// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')
// Для решения задачи надо получить массив букв
// Добавить редьюс
// Начальное значение редьюса массив с пустой строкой
// Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву
// Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;
// Input: "abrac", 2
// Actions:
// Output: ["ab", "ra", "c"]
// Input: "abracadabra", 4
// Actions:
// Output: ["abra", "cada", "bra"]

// const task11 = (str, num)=>{
//     return str.split('').reduce((acc, rec)=>{
//         if(acc[acc.length - 1].length < num){
//             acc[acc.length - 1] += rec
//             return acc
//         }
//         return [...acc, rec]
//     }, [''])

// }
// console.log(task11("abrac", 2));
// console.log(task11("abracadabra", 4));













