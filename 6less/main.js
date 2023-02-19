// For..in  &&  For...of used in arrays and objects

// let person = {
//     name: 'Ivan',
//     age: 26,
//     gender: 'man'
// }

// for(let key in person){
//     console.log(key);
// }

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     console.log(person.key); // undefined
// }

// let cars = [ 'BMW', 'honda', 'lexus', 'subaru'];

// for(let i = 0; i <  cars.length; i++){
//     console.log(cars[i]);
// }

// for(let item of cars){
//     console.log(item);
// }


// cars.push('opel');
// cars.pop();
// cars.unshift('lada');
// cars.shift();

// cars = [...cars, 'opel'];
// cars = ['opel', ...cars];


// splice

// cars.splice(2,2,'opel', 'lada');


// console.log(cars.slice(0, 3));

// let cars = [ 'BMW', 'honda', 'lexus', 'subaru'];

// console.log(cars.includes('BMW'));
// console.log(cars.indexOf('BMW', 2));
// console.log(cars.lastIndexOf('BMW'));


// let arr = [2, 4, 1 , 3, 6, 12];

// arr.sort();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());


// let str = 'AbraCadabra';
// console.log(str.split(''));

// let name = 'Ivan';
// name = name.split('');
// name[name.length - 1] = 'm';
// name = name.join('');

// console.log(name);

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr = [...arr, ...arr2];

// arr = arr.concat(arr2);
// console.log(arr);


// let arr = [[1, 2], [5, 4], [5, 6]];
// arr = arr.flat();
// console.log(arr);


// let arr = [1,2,3,4,5,6];
// arr = arr.fill('max', 0, 3);
// console.log(arr);

// let arr = new Array(5).fill('max', 0, 5);
// console.log(arr);

// let x = 5;
// console.log(x++);

// console.log([] + false - null + true);

// let y = 1;
// let x = y = 2;
// console.log(x);

// console.log([] + 1 + 2);

// console.log('1'[0]);
// console.log(2 && 1 && null && 0 && undefined);

// console.log(null || 2 && 3 || 4 );


// Objects & Array

// let person = {
//     name : 'Rasul',
//     age : 22,
//     info : {
//         surname: 'Abdumananov',
//         role : 'student'
//     }
// }

// person.uid = '1234567890';
// console.log(person);
// console.log(person.name);
// console.log(person['name']); // !!! 'required'

// Object.freeze(person);
// person.name = 'Maria';
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let arr = [1,2,3,4,5,6,7];
// console.log(arr[1])
// console.log(arr.length);
// console.log(arr[arr.length - 1]);
// console.log(arr.reverse()); // переварачивает массив


// let name = 'Maksat';
// let arr = [];

// for (let i = 0; i < name.length; i++) {
//     // arr = [...arr, name[i]];
//     // arr.push(name[i]); 
// }
// console.log(name.split(''));
// console.log(arr);

// let arr = [ 'M', 'a', 'k', 's', 'a', 't' ];
// console.log(arr.join(''));

// let word = 'abraCadabra';
// console.log(word.split('').reverse().join(''));

// let name = 'Anna';

// name.toLowerCase().split('').reverse().join('');
// name = name.toLowerCase();
// if(name == name.split('').reverse().join('')){
//     console.log(true);
// }else{
//     console.log(false);
// }


// let arr = [1,2,3];

// arr.push(true);
// arr.unshift(false);
// arr[10] = 'Maria';

// arr = arr.concat(100);
// arr = arr.concat([4,5,6]);
// console.log(arr);


// let arr = [1,2,3,4,5];
// let arr2 = [6,7,8,9];

// arr = [...arr, ...arr2];
// console.log(arr);

// let arr = [1,2,3];
// let arr2 = [4,5,6];
// let arr3  = [7,8,9];

// let check = false;

// if(check){
//     console.log([...arr, ...arr2]);
// }else{
//     console.log([...arr, ...arr3]);
// }

// let arr = [1,2,3,4,5];

// // delete arr[0]

// console.log(arr.slice(0,3));

// arr = arr.slice(0,3);

// arr.splice(2,1,77);
// arr = arr.splice(3,2);

// arr.splice(3,2,10,100, 1000, 1001);
// arr.splice(2,0,10);
// console.log(arr);

// let arr = [2,4,7,9,2,4,6, 33, 'a', 'A', 'T', 't'];
// // console.log(arr.sort());

// console.log(Array.isArray(arr));
// console.log(arr + 'Maks');


// let arr = [];
// console.log([] + 5); // '5'
// // console.log('3,2' * 5);


// let arr = [1,2,3,4,5];
// console.log(arr.fill(true, 3,4));

// let arr = [[1,2], [3,4]];
// console.log(arr.flat());

// деструктуризация!!!!

// let arr = ['Maks', true, false, 'Askar'];

// let [name, querty, ...other] = arr;
// console.log(name);
// console.log(other);
// console.log(querty);
























