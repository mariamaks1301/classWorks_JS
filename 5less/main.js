// Циклы while, do..while, for

// let i = 1;

// while(i <= 10){
//     console.log(i);
//     i++
// }

// let i = 1;

// do{
//     console.log(i);
//     i++
// }while (i <=10);


// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue // пропускает данную итерацию и продолжает работу цикла
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }

// let word = 'AbraCadabra';

// for(let i = 0; i < word.length; i++){
//     if(i  === Math.floor(word.length / 2)){
//         break
//     }
//     console.log(word[i]);
// }

// for(let i = 0; i < Math.floor(word.length / 2); i++){
   
//     console.log(word[i]);
// }

// let word = 'AbraCadabra';
// let wordReverse = '';

// for (let i = 0; i < word.length; i++) {
//     wordReverse = word[i] + wordReverse
    
// }
// console.log(wordReverse);

// let word = 'AbraCadabra';

// for (let i = 0; i < word.length; i++) {

//     if(i % 2){
//         console.log(word[i]);
//     }
    
// }

// let words = [ 'a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < words.length; i++) {
//     if (i % 2 ) {
//         words[i] = words[i].toUpperCase();
          
//     }else{
//         words[i] = words[i].toLowerCase();
       
//     }  
// }
// console.log(words);

// let cars = ['BMW', 'Lexus', 'Mers', 'Honda', 'Subaru'];

// for (let i = 0; i < cars.length; i++) {
//     if(cars[i].length > 4){
//         console.log(cars[i]);
//     }  
// }
// console.log(cars);

// let arr = [[1, 2], [3, 4], [5, 6]];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][0] + arr[i][1]);
// }

// let words = ['abra', 'Max', 'Mers', 'apple'];

// for (let i = 0; i < words.length; i++) {
//     for (let j = 0; j < words[i].length; j++) {
        
//         console.log(words[i][j]);
//     }
    
// }

// let numbers = [7, 1, 2, 4, 9, 20, 56, 40];
// let result = 0;

// for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
    
// }
// console.log(result);

// let years = ['Jenuary', 'Fabruary', 'March', 'April', 'May', 'June', 'July','Augest','September','October','November','December'];


// for (let i = 0; i < years.length; i++) {
//     switch (years[i]) {
//         case Jenuary:
//         case Fabruary:
//         case December:
//             console.log(`${years[i]} is winter `);
//             break;
   
//         case March:
//         case April:
//         case May:
//             console.log(`${years[i]} is spring `);
//             break;
                    
                    
//         case June:
//         case July:
//         case Augest:
//             console.log(`${years[i]} is summer `);
//             break;


//         case September:
//         case October:
//         case November:
//             console.log(`${years[i]} is autumn `);
//             break;
        
//     }
    
// }

// Циклы

// let i = 1;

// while (i < 11) {
//     console.log(i);
//     i++
// }


// const messageHalf = (message)=>{
    // return message.slice(0, Math.round(message.length/2));
//    
// }
// console.log(messageHalf('Hello world.'));

// const messageHalf = (message)=>{
//     if(message.includes('Hello')){
//         return 'Hello есть'
//     }
//     return 'Hello нет'
// }
// console.log(messageHalf('Hello world.'));

// const searcItemInArray = (arr, item) => {
//     if(arr.includes(item)){
//         return 'Найдено'
//     }
//     return 'Ненайдено'

    
// }
// console.log(searcItemInArray(['bmw', 'honda', 5, 'lexus'], 'mers'));
// console.log(searcItemInArray(['bmw', 'honda', 5, 'lexus'], 'bmw'));











