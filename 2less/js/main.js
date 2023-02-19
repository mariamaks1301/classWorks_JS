// console.log(1324268);

// математические операции

// console.log(undefined + 5); // NaN
// console.log(undefined + 'new'); // 'undefinednew'
// console.log(undefined + null); // NaN
// console.log(undefined + true); // NaN

// console.log(null + 5);  // 5 
// console.log(null * 5);  // 0
// console.log(null + 'new'); // 'nullnew'
// console.log(null + true); // 1
// console.log(null + false); // 0


// Сокращённая арифметика с присваиванием

// let a = 5;
// let b = 10;
// a += b;  // ===    a = a + b
// console.log(a);

// a = a * b;  // a *= b;

// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;
// n += 5;  // теперь n = 7
// n *= 2;  // теперь  n = 14

// let n = 2;
// n *= 3 + 5;  // n = 16 т.к n = n * (3 + 5);  ===  n *= 8;

// Инкремент/декремент

//Инкремент ++ увеличивает переменную на 1:

// let counter = 2;
// counter++;
// alert( counter); // 3

// Декремент -- уменьшает переменную на 1:

// let counter = 2;
// counter--
// alert( counter); // 1

//Когда оператор идёт после переменной — это «постфиксная форма»: counter++.
// «Префиксная форма» — это когда оператор идёт перед переменной: ++counter.

// let counter = 2;
// let a = ++counter;
// console.log(a); // 3

// let counter = 2;
// let a = counter++;
// console.log(a); // 2

// Инкремент/декремент можно использовать в любых выражениях

// let counter = 1;
// console.log(2 * ++counter); // 4

// let counter = 1;
// console.log( 2 * counter++); // 2

// let a = 1;
// let b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// let a = 1, b = 1;

// alert( ++a ); // 2, префиксная форма возвращает новое значение
// alert( b++ ); // 1, постфиксная форма возвращает старое значение

// alert( a ); // 2, значение увеличено один раз
// alert( b ); // 2, значение увеличено один раз

// Результат присваивания

// let a = 2;
// let x = 1 + (a *= 2); //5

// Преобразование типов

// "" + 1 + 0  // '10'
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3"  //6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // '$45'
// "4" - 2 //  2
// "4px" - 2 // NaN  
// "  -9  " + 5 // '-9 5' *******************!
// "  -9  " - 5 // -14
// null + 1  // 1 
// undefined + 1 // NaN
// " \t \n" - 2 // -2 **********************!

// Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
// Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
// Сложение со строкой превращает число 5 в строку и добавляет к строке.
// Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
// null становится 0 после численного преобразования.
// undefined становится NaN после численного преобразования.
// Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(a + b); // 12

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 3

// Способы записи числа

// let billion = 1000000000;

// let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

// alert( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)


// 1e3 = 1 *1000
// 1.23e6 = 1.23 * 1000000
// let ms = 0.000001;
// let ms = 1e-6;

// // 1 делится на 1 с 3 нулями
// 1e-3 = 1 / 1000 (=0.001)

// // 1.23 делится на 1 с 6 нулями
// 1.23e-6 = 1.23 / 1000000 (=0.00000123)

// Шестнадцатеричные, двоичные и восьмеричные числа

// alert( 0xff ); // 255
// alert( 0xFF ); // 255 (то же самое, регистр не имеет значения)

// let a = 0b11111111; // бинарная форма записи числа 255
// let b = 0o377; // восьмеричная форма записи числа 255

// alert( a == b ); // true, с двух сторон число 255

// let num = Number(12);
// console.log(num);

// let num = true;
// let num2 = '3s';
// console.log(+num);
// console.log(+num2);
// console.log(Number(num2));
// console.log(num2 * 1);

// console.log(parseInt(num2));

// let num = true;
// console.log(+num);
// console.log(Number(num));
// console.log(num * 1);

// console.log(parseInt(num)); // NaN
// console.log(parseFloat(num)); // NaN

// let a = 5;
// let b = 'new';
// let c = a + b // '5new'
// let d = a * b // NaN
// console.log(d);
// console.log(isNaN(d));  // true
// console.log(isNaN(a));  // false

// console.log(isFinite(a)); // true
// console.log(isFinite(b)); // false 

// let a = 5.005;

// console.log(parseInt(a));  // 5

// console.log(Math.floor(a)); // 5

// 1

// let num = 1.23456;

// alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2

// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.

// let num = 12.34;
// alert( num.toFixed(1) ); // "12.3"

// let num = 12.36;
// alert( num.toFixed(1) ); // "12.4"


// let num = 6.743;
// let numb = 4.987;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log(num.toFixed(1));
// console.log(numb.toFixed(2));

// console.log(Math.pow( 2, 5));

// console.log(Math.random());

// console.log(Math.ceil(Math.random() * 10));


// 1 Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// let a = +prompt('Enter first number:');
// let b = +prompt('Enter second number:');
// console.log(a + b);











