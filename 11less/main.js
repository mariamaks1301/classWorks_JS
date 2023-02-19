// Рекурсия и замыкание

// function pow(x, n){
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *=  x
//     }

//     return result
// }
// console.log(pow(2,3));
// console.log(pow(2,2));
// console.log(pow(2,4));  

// const recursiveFunc = ()=>{
//     recursiveFunc()
//     return 'call'

// }
// console.log(recursiveFunc());

// let divWidth = 0;
// const recursiveFunc = ()=>{
//     divWidth++;
//     if(divWidth > 100){
//         return 'end'
//     };
//     console.log(divWidth);
//     recursiveFunc();
// }

// recursiveFunc();

// const closureFunc2 = (num1, num2) => {
//     return num1 + num2
// }

// const closureFunc = (a, b) => {
//     return closureFunc2(a,b)
// }
// console.log(closureFunc(1,2));

// const closureFunc = (a,b)=> {       // карирование
//     return ()=> {
//         return a + b;
//     }
// }
// console.log(closureFunc(1,2)());

// function parseToHTML(tree){
//     let keys = Object.keys(tree);
//     const setAttrs = (attrs) => {
//         return Object.entries(attrs).reduce((acc, rec)=> {
//             return acc + `${rec[0]} = ${rec[1]}`
//         }, '')
//     }
// }

// const mapChildren = (children) => {
//     return children.map((item)=> {
//         return returnFunc(item[keys[0]], item[keys[1]], item[keys[2]])
//     })
// }

// const returnFunc = (tag, attrs, children) => {
//     return `<${tag} ${attrs !== undefined ? setAttrs(attrs) : ''}>
//     ${
//         children?.length ? mapChildren(children) : '' 
//     }
//     </${tag}>`
// }

// let tree = {
//     type: 'div',
//     attrs: {
//         class: 'test',
//         id: 'test-id'
//     },
//     children: [{
//         type: 'p',
//         children: [{
//             type: 'p',
//             attrs: {class: 'test3', id: 3}
//         }],
//     },
//         {
//             type: 'div',
//             attrs: {class: 'test2', id: 2},
//             children: null
//         }]
// }

// function createCalcFunc(){
//     return function(){
//         console.log(1000 * n);
//     }
// }
// const calc = createCalcFunc(42);
// calc();

// function createIncrementor(n) {
//     return function (num){
//         return n + num
//     }
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));


// console.log(addTen(10));
// console.log(addTen(41));


// function urlGenerator(domain){
//     return function (url){
//         return `https://${url}.${domain}`
//     }
// }

// let comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'));

// const recursiveFunc = ()=>{
//     recursiveFunc();
//     return 'call'
// }
// console.log(recursiveFunc());

// let i = 0;
// const recursiveFunc = ()=> {
//     i++;
//     if(i > 5){
//         return 'end'
//     }
//     console.log(i);
//     recursiveFunc()
// }
// recursiveFunc();

// const closureFunc2 = (num1, num2)=> {
//     num1 = 5;
//     return num1 + num2
// }

// const closureFunc = (a, b)=>{
//     console.log(a);
//     return closureFunc2(a,b)

// } 

// console.log(closureFunc(1, 2));






