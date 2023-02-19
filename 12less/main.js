// let h1 = {
//     class: 'title', 
//     id: 'main',
//     text: 'Hello world',
//     children: []
// }

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// получение элементов

// let h1Id = document.getElementById('main');
// let h1Class = document.getElementsByClassName('title');  // get  псевдоМассив! - не является массивом,  но можно перевести в массив
// let h1Tag = document.getElementsByTagName('h1');
// console.log(h1Id);
// console.log(h1Class);
// console.log(h1Tag);

// selector = h1, .title, #main, *, .title:hover, body>.title, .container

// let h1Id = document.querySelector('#main');
// let h1Class = document.querySelector('h1.title');

// console.log(h1Id);
// console.log(h1Id.tagName);
// console.log(h1Id.className);
// console.log(h1Id.children);
// console.log(h1Id.id);
// console.log(h1Id.textContent);

// let classTitleElements = document.querySelectorAll('.title');

// const task = (arr)=> {
//     return arr.map((item)=>{
//         return item.textContent
//     });

// };
// console.log(task(Array.from(classTitleElements)));


// ПОЛУЧЕНИЕ ТЕКСТОВОГО ЗНАЧЕНИЯ - ТЕКСТОВОЙ НОДЫ - ТЕКСТА

// let idMainElement = document.querySelector('#main');

// idMainElement.textContent = 'Maria';
// idMainElement.innerHTML = 'Maria <span>Maksimova</span>'
// console.log('textContent', idMainElement.textContent); // ОБРАБАТЫВАЕТ content
// console.log('innerText', idMainElement.innerText); // ОБРАБАТЫВАЕТ content
// console.log('innerHTML', idMainElement.innerHTML); // ОБРАБАТЫВАЕТ ТЕГИ!!!

// let itemElement = document.querySelectorAll('.list-item');

// const task = () => Array.from(itemElement).forEach((item, idx)=> {
//          item.textContent += ` ${idx + 1}`
//     })

// task();


// let box = document.querySelector('.box');

// box.style.width = 200 + 'px';
// box.style.height = 200 + 'px';
// box.style.backgroundColor = 'red';

// box.style.cssText = 'width: 200px; height: 200px; background-color: blue; border: 1px solid red; border-radius: 50%';


// let boxes = document.querySelectorAll('.box');

// const liBoxFunc = (arr)=> {
//     return arr.map((item)=>{
//         return item.style.cssText = 'width: 200px;' + 
//         'height: 200px;' +  
//         'background-color: blue;' + 
//         'border: 1px solid red;' +  
//         'border-radius: 50%;' + 
//         'list-style-type: none;' + 
//         'display: inline-block;'
//     });
// }
// console.log(liBoxFunc(Array.from(liBox)));

// let boxes = document.querySelectorAll('.box');


// Array.from(boxes).forEach((item, idx)=>{
//     item.style.cssText = 'width: 100px;' + 
//             'height: 100px;' +  
//             `background-color: ${idx % 2 === 0 ? 'orange' : 'blue'};` + 
//             'border: 1px solid red;' +  
//             'border-radius: 50%;' + 
//             'list-style-type: none;' 
            
// });

// let h1 = {
//     class: 'title',
//     id : 'main',
//     text : 'Hello world',
//     children: []
// }


// console.log(document);
// console.log(document.body);
// console.log(document.body);

// getElements!!!

// let h1Id = document.getElementById('main');
// let h1Class = document.getElementsByClassName('title');
// let h1Tag = document.getElementsByTagName('h1');


// console.log(h1Id);
// console.log(h1Class); // HTML COLLECTION!!! псевдо массив- его можно перевести в массив!
// console.log(h1Tag);

// selector = h1, .title, #main, *, .title:hover, body > .title, .container

// let h1Id = document.querySelector('#main');
// let h1Class = document.querySelector('h1.title');
// let collect = document.querySelectorAll('.title');

// console.log(h1Id.tagName);
// console.log(h1Id.className);
// console.log(h1Id.children);
// console.log(h1Id.textContent);

// let classTitleElements = document.querySelectorAll('.title');
// // console.log(classTitleElements);
// console.log(Array.from(classTitleElements));

// const task = (arr)=> {
//     return arr.map((item)=>{
//         return item.textContent
//     })
// }
// console.log(task(Array.from(classTitleElements)));


// получение текстового значения - текстовой ноды - текста

// let idMainElement = document.querySelector('#main');

// idMainElement.innerHTML = 'Maria <span>Maksimova</span>';

// console.log('textContent', idMainElement.textContent);
// console.log('innerText',idMainElement.innerText);
// console.log('innerHTML',idMainElement.innerHTML);

// let listItemElements = document.querySelectorAll('.list-item');

// const task = (arr)=> Array.from(listItemElements).forEach((item, idx)=>{
//     return item.textContent += ` ${idx + 1}`
// });
// console.log(task());

// let h1 = {
//     class : 'title',
//     id: 'main',
//     text: 'Hello world!',
//     children: []
// }

// getElements

// let h1Id = document.getElementById('main');
// let h1Class = document.getElementsByClassName('title');
// let h1Tag  = document.getElementsByTagName('h1');
// console.log(h1Id);
// console.log(h1Class);  // get HTML collection psevdo array
// console.log(h1Tag);


//selector : h1, .title, #main, *, .title:hover, body > .title

// let h1Id = document.querySelector('#main');
// let h1Class = document.querySelector('h1.title');
// let classes = document.querySelectorAll('.title');

// console.log(h1Id.tagName);
// console.log(h1Id.className);
// console.log(h1Id.id);
// console.log(h1Id.children);

// let elementsClass = document.querySelectorAll('.title');
// console.log(elementsClass);

// const task = (arr)=> {
//     return arr.map(item => item.textContent)
// }
// console.log(task(Array.from(elementsClass)));

// GET TEXT NODE - TEXT CONTENT  - TEXT
// let idMainElement = document.querySelector('#main');

// idMainElement.innerHTML = 'Maria <span>Maksimova</span>';

// console.log(idMainElement.textContent);
// console.log(idMainElement.innerHTML);


// let listItems = document.querySelectorAll('.list-item');

// const tasks = () => Array.from(listItems).forEach((item, idx)=> {
//  item.textContent += ` ${idx + 1}`;
// })

// tasks();

// let listItemElements = document.querySelectorAll('.list-item');

// const tasks = ()=> Array.from(listItemElements).forEach((item, idx)=>{
//     item.innerHTML += ` ${idx + 1}`
// }) 
// tasks();

// let listItemElements = document.querySelectorAll('.list-item');

// const task = ()=> Array.from(listItemElements).forEach((item, idx)=> {
//     item.textContent += ` ${idx + 1}`
// })
// task();

// let listItemelements = document.querySelectorAll('.list-item');
// const task = ()=> Array.from(listItemelements).forEach((item, idx)=>{
//     item.innerHTML += ` ${idx + 1}`
// });
// task();

// let box = document.querySelector('.box');

// console.log(box.style.width);

// let box = {
//     style: {
//         'text-align': '',
//         color: '',
//         display: '',
//     }
// }

// box.style.width = 200 + 'px'
// box.style.height = 200 + 'px'
// box.style.backgroundColor = 'red'
// box.style.borderRadius = 50 + '%'
// console.log(box.style);

// box.style.cssText = 'width: 200px;' +
// 'height: 200px;' +
// 'background-color:purple;' +
// 'border-radius: 50%;' +
// 'border: 10px solid black'

// let boxes = document.querySelectorAll('.box');

// const task = () => Array.from(boxes).forEach((item, idx)=>{
//     item.style.cssText = 'width: 200px;' +
//     'height: 200px;' +
//     'border-radius:50%;' +
//     `background-color: ${idx % 2 ? 'orange' : 'red'};` +
//     'border: 10px solid black'
// });
// task();

// let h1 = document.querySelector('.title');

// console.log(Array.from(h1.attributes));

// h1.setAttribute('id', 'main');
// h1.removeAttribute('class');
// console.log(h1.hasAttribute('id'));
// console.log(h1.getAttribute('id'));

// let h1 = {
//     class : 'title',
//     id: 'main',
//     textContent : 'Hello world',
//     children : [],
// }

// console.log(document.body);
// console.log(document.head);

// let h1Class = document.querySelectorAll('.title');
// let h1Id = document.querySelector('#main');

// const task = ()=> Array.from(h1Class).forEach((item, idx)=>{
//     item.innerHTML = '<span>Maria</span> <span>Maksimova</span>'
// });
// console.log(task());

// let listItemElements = document.querySelectorAll('.list-item');

// const task = () => Array.from(listItemElements).forEach((item, idx)=>{
//     if(idx % 2 === 0) {
//         item.innerHTML += ` ${idx + 5}` 
//     }else{
//         item.innerHTML += ` ${idx + 1}`
//     }
// });
// task();

// let boxes = document.querySelectorAll('.box');
// let container = document.querySelectorAll('.container');

// const containerFlex = (arr) => arr.forEach(item => {
//     item.style.cssText = 'display: flex;' +
//     'column-gap: 15px;'
// });
// console.log(containerFlex(Array.from(container)));

// const squear = (arr)=> arr.forEach((item, idx)=> {
//     item.style.cssText = 'width: 200px;' +
//     'height: 200px;' +
//     `background-color: ${idx % 2 === 0 ? 'orange' : 'red'};`  +
//     'border: 1px solid green;' +
//     'border-radius: 30px;'
    
// });
// console.log(squear(Array.from(boxes)));

// let h1 = document.querySelector('.title');

// h1.setAttribute('id', 'text');
// h1.removeAttribute('class');
// // console.log(h1.hasAttribute('id'));
// // console.log(h1.hasAttribute('class'));
// h1.setAttribute('id', 'maria');
// console.log(h1.getAttribute('class'));

// let titles = document.querySelectorAll('.title');

// const task = (arr)=> arr.forEach((item, idx)=>{
//     item.textContent += ` ${idx}`;
//     if(item.getAttribute('class').includes('text')){
//         item +=  item.setAttribute('id', `text${idx}`)
//     }
// });


// task(Array.from(titles));