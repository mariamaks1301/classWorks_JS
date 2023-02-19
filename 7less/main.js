// Function declaration, Function Expression, Arrow Function

// function microWave (a){
//     return typeof a
// }
// console.log(microWave(5));
// console.log(microWave({name: 'Max'}));
// console.log(microWave('Ivan'));
// console.log(microWave(true));

// function calc (a, b){
    // return a + b
// }
// console.log(calc(5, )); // 5 + undefined === NaN

// function calc(a, b) {
//     console.log(a + b);
//     return 1
// }



// let width = calc(6,8); // function always in return, without return we get undefined
// console.log(width);

// function num(a){
//     if(a % 2 === 0){
//         return 'четное'
//     }
//     return 'нечетное'
// }
// console.log(num(10));
// console.log(num(15));
// console.log(num(20));

// function num2(a){
//     if(a % 2){
//         return 'нечетное'
//     }
//     return 'четное'
// }
// console.log(num2(10));
// console.log(num2(15));
// console.log(num2(20));

// Function declaration
// function calcPlus(a, b){
//     return a + b

// }
// console.log(calcPlus(5, 6));

// Function Expression - created with let or const
// const calcMinus = function (a, b){
//     return a - b
// }

// console.log(calcMinus(9, 6));

// const calcMultiply = (a, b) => {
//     return a * b
// }
// console.log(calcMultiply(6, 8));

// const calcDevide = (a, b) =>  a / b

// console.log(calcDevide( 10, 2));

// const calcMinus = function (a, b){
//     return arguments // arguments reterned like object!
// }
// console.log(calcMinus(6,9));

// Arrow function - аргументом или параметрами принемает вышестоящую функцию (родительскую)

// function messageHalf (message){
//     return message.slice(0, Math.round(message.length / 2))
// }

// console.log(messageHalf('Привет мир я начала изучать функции!'));
// console.log(messageHalf('Hello world!'));


// const checkMessage = (message) => {
    
//     if(message.toLowerCase().includes('привет')) {
//         return 'Приветствие есть'
//     }
//     return 'Приветствия нет'
// }

// console.log(checkMessage('Привет мир я начала изучать функции!'));
// console.log(checkMessage('привет!'));

// const searchItemInArr = (arr, item) =>{
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == item){
//             return 'найдено'
//         }
//         return 'ненайдено'
//     }
// }

// console.log(searchItemInArr(['BMW', 'honda', 'lexus'], 'mers'));
// console.log(searchItemInArr(['BMW', 'honda', 'lexus'], 'BMW'));

// function showName (name){
//    return  console.log(name);
// }
// showName('Alisher');

// function showMessage (){
//     let age = 22;
// }
// console.log(age);


// let age = 32;
// function nameFunc (){
//     console.log(age);
// }
// nameFunc();

// function getSum (start, end){
//     let sum = 0;
//     for(let i = start; i <= end; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSum(14, 20));

// Task 1
// Ваша задача — составить функцию, которая возвращает сумму последовательности целых чисел.
// Последовательность определяется тремя неотрицательными значениями: начало , конец , шаг (включительно) .
// Если начальное значение больше конечного , функция должна вернуть 0
// Примеры

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// function getSum (start, end, step){
//     if(start > end) return 0
//     let sum = 0;
//     for(let i = start; i <= end; i += step){
//         sum += i
//     }
//     return sum;

// }
// console.log(getSum(2,2,2));
// console.log(getSum(2,6,2));
// console.log(getSum(1,5,1));
// console.log(getSum(1,5,3));

// 2
// function getTypeOf(val){
//     return `${val} typeOf ${typeof val}`
// }
// console.log(getTypeOf(1));
// console.log(getTypeOf(true));

//3
// function getSquearOfNumber(){
//     return 
// }
// console.log(getSquearOfNumber())

// function gimme (arr){
//     // return arr.indexOf([...arr].sort((a,b)=>a-b)[1]);
//     let sorted = arr.sort((a,b)=>a - b);
//     return arr.indexOf(sorted[1]);
// }
// console.log(gimme([2,3,1]));
// console.log(gimme([5,10,14]));


// function blender(product) {
//     if(product === 'apple' || product === 'pear'){
//         return 'Juice ' + product
//     }
//     return `${product} smoothies`   
// }
// console.log(blender('apple'));
// console.log(blender('pear'));
// console.log(blender('banana'));
// console.log(blender('raspberry'));
// console.log(blender('strawberry'));


// function calc(num){
//     return num % 2 ? 'нечетное' : 'Четное' 
// }
// console.log(calc(2));
// console.log(calc(7));

// function strLength (str){
//     return str.length
// }
// console.log(strLength('Maria'));


// const deleteLowerCas = (word)=>{ //*********************************** */
//     letter = word.split('')
//     if(letter === letter.toUpperCAse()){
//         return letter
//     }
//     return 
// }
// console.log(deleteLowerCas('MaKSat'));








