// Условное ветвление: if, '?'

// let name = 'Maria';
// if(name == 'Mary'){
//     console.log('you are guess!');
// } else{
//     console.log("you didn't  guess!");
// }

// let a = 5;

// if (a){
//     console.log('Right');
// } else{
//     console.log('empty');
// }

// console.log(Boolean(name));
// console.log(Boolean(2));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(name));

// let car = {
//     model: 'BMW',
//     turbo: false
// }

// if(car.turbo){
//     console.log('есть');
// }else{
//     console.log('нет');
// }

// let a = 5;
// if( a != 5){
//     console.log('неравно');
// }else{
//     console.log('равно');

// }

// console.log(!5);
// console.log(!false);
// console.log(!!{});


// let person = {
//     name: 'Akdil',
//     age: 21
// }

// if(name.length > 3){
//     console.log('Валидация прошла успешно');
// } else{
//     console.log('Ты не прошел валидацию');
// }

// if(person.age >= 21){
//     console.log('you are welcome');
// }else{
//     console.log('entres forbidden');
// }

// if( person.age > 21 && person.age < 30){
//     console.log('you are welcome');
// }else{
//         console.log('entres forbidden');
// }

// if(person.age == 21 || person.age == 25) {
//     console.log('you are welcome');
//      } else {
//         console.log('entres forbidden');
//      }


// console.log(undefined && null); // undefined
// console.log(1 && 5); // 5

// console.log(undefined || null); // null
// console.log(4 || 3); // 4

// let person = {
//     favoriteColor: 'blue'
// }

// if(person.favoriteColor === 'red'){
//     console.log('red');
// }else if ( person.favoriteColor === 'green'){
//     console.log(green);
// }else if (person.favoriteColor === 'blue'){
//     console.log('blue');
// }else{
//     console.log('black');
// }

// let person = {
//     age: 35,
//     name: 'Oleg'
// }

// if(person.age === 35 && person.name === 'Ivan'){
//     console.log('не приглашен');
// }else if(person.age === 35 && person.name === "Oleg"){
//     console.log('приглашен');
// }else{
//     console.log('не приглашен');
// }

// let person = {
//     age: 35,
//     name: 'Oleg'
// }

// person.age > 30 ? console.log('больше 30') : console.log('меньше 30 или 30');

// let person= {
//     favoriteColor: 'red'
// }

// person.favoriteColor === 'blue' ? console.log('blue') : console.log('black');

// let person = {
//     name: 'Lola'
// }

// person.name.length >= 5 ? console.log('валидация прошла успешно') : console.log('валидация не прошла');

// let link = 'http://google.com';

// link.startsWith('https') ? console.log('Ваш сайт защищен') :

// link.startsWith('http') ? console.log('Ваш  сайт не защищен')

// : console.log('неверная ссылка на сайт');

// let language = 'Russian';
// switch(language){
//     case 'RF' :
//     case 'KG' :
//     case 'KZ' : console.log('Speaks Russian');
//     break
//     case 'USA' :
//     case 'Eng' : 
//     case 'Australia' : console.log('Speaks English');
//     break
//     case 'Canada':
//     case 'France':  console.log('Speaks Franch');
// }


// условное ветвление

// let name = 'Maria';
// // if(name === 'Maria'){
// //     console.log('you are gues!');
// // }

// if(name === 'Mary'){
//     console.log('You are guess!')
// }else{
//     console.log('You dont guess!')
// }

// let name = 'Max';
// console.log(Boolean(name));
// console.log(Boolean(2));
// console.log(Boolean(0));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// let a = 5;

// if(a){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// let a = 'ajdhjhdjgf';

// if(a.length){
//     console.log(a);
// }else{
//     console.log('empty');
// }



// let car = {
//     model : 'BMW',
//     turbo : false

// }

// if(car.turbo){
//     console.log('есть')
// }else{
//     console.log('нет')
// }

// let a = 5;
// if(!a){
//     console.log('неравен')
// }else{
//     console.log('равен')
// }

// console.log(!5); // false
// console.log(!!5); //true
// console.log(!false); // true
// console.log(!{}); // false

// let person = {
//     name: 'Akdil',
//     age: 23
// }
// if(person.name.length > 3){
//     console.log('Валидация прошла успешно!');
// }else{
//     console.log('Ты не прошел валидацию!');
// }

// if(person.age >= 21){
//     console.log('Ты можешь войти!')
// }else{
//     console.log('Вход запрещен!')
// }

// if(person.age > 20 && person.age < 30){
//     console.log('Проходи')
// }else{
//     console.log('Не проходишь')
// }

// if(person.age === 21 || person.age === 25){
//     console.log('Проходи')
// }else{
//     console.log('Не проходишь!')
// }


// console.log(false && false); // false1
// console.log(false && true); // false1
// console.log(true && false); // false2
// console.log(true && true); // true2

// console.log(undefined && null); // undefined
// console.log(1 && 5); // 5

// console.log(false || false); // false2
// console.log(false || true); // true2
// console.log(true || false); // true1
// console.log(true || true); // true1


// let person = {
//     name : 'Akdil',
//     age: 18
// }

// if(person.age > 20 && person.age < 30){
//     console.log('входишь');
// }else{
//     console.log('не входишь');
// }

// if(person.age > 20 || person.age < 30){
//     console.log('входишь');
// }else{
//         console.log('не входишь');
   
// }

// let person = {
//     favouriteColor : 'y'
// }

// if(person.favouriteColor === 'blue'){
//     console.log('blue')
// }else if(person.favouriteColor === 'red'){
//     console.log('red')
// }else if(person.favouriteColor === 'green'){
//     console.log('green')
// }else{
//     console.log('black')
// }

// let a = 5;
// if(a > 6){
//     console.log('больше 6')
// }else if( a > 3){
//     console.log('больше 3')
// }else if(a > 4){
//     console.log('больше 4')
// }else{
//     console.log('ни один из вариантов не верен')
// }
// let person  = {
//     name : 'Oleg',
//     age : 25
// }

// if(person.name === 'Ivan' && person.age === 35){
//     console.log('ivan 30')
// }else if(person.name === 'Oleg' && person.age === 35){
//     console.log('Oleg 35')
// }


// console.log(false && 'true1' || 'true2'); // true2
// console.log(true || false && false); // true

// person.age > 30 ? console.log('больше 30') : console.log('меньше 30');


// let protocol = 'https://google.com';

// protocol.startsWith('https') ? console.log('Ваш сайт защищен')
//  : protocol.startsWith('http') ? console.log('Ваш сайт не защищен') 
//  : console.log('Неверно введен сайт');


// let name = 'Ira';

// switch (name) {
//     case 'Lisa': console.log('you are invited');
//         break;

//     case 'Ira': console.log('you are invited');
//         break;

//     case 'Lana' : console.log('You are not invited!');
//         break;
// }

// let name = 'Maxat';

// switch (name) {
//     case 'Muslim': console.log('your name is Muslim');
//         break;

//     case 'Akdil' : console.log('your name is Akdil');
//     break;

//     case 'Max' : console.log('your name is Max');
//     break;

//     default: console.log("I don't know your name.")
// }


// let a = 3;

// switch (true) {
//     case a > 5 && a < 15 : console.log('5 - 15');        
//         break;

//     case a > 10 && a < 20 : console.log('10 -20');
//     break;

//     case a > 0 && a < 10 : console.log('0 - 10');
//     break;
// }

// let color  = 'green';

// switch (color) {
//     case 'green':
//     case 'red':
//     case 'blue': console.log('RGB'); 
//         break;

//     case 'white' :
//     case 'black' : console.log('in-yan');
//         break;

//     case 'orange' :
//     case 'yellow' :
//     case 'red' : console.log('sun');
//         break;
// }