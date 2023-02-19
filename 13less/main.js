

// get element
// let title = document.querySelector('.title');
// console.log(title);

// create Element
// let h1 = document.createElement('h1');
// h1.textContent = 'Hello Maria'
// console.log(h1);

// add element in the End of parent!!!
// title.append(h1);

// add element in the start of parent!!!
//title.prepend(h1);

// put in the start of document! 
// document.body.prepend(h1);

// put before element!
// title.before(h1);

// put after element!
// title.after(h1);

// let listItem = document.querySelector('.list-item');

// get element after cursoring
// console.log(listItem.previousElementSibling);
// console.log(listItem.nextElementSibling);

// IMPERATION WAY
// let box = document.querySelector('.box');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// let button  = document.createElement('button');

// h1.textContent = 'Title';
// p.textContent = 'Hello world!';
// button.textContent = 'Send'


// box.append(h1);
// box.append(p);
// box.append(button);


// h1.className = 'title';
// button.className = 'btn';
// button.setAttribute('typye', 'button');
// p.setAttribute('id', 'text');

// let box = document.querySelector('.box');
// // DECORATION WAY
// box.innerHTML = '<h1 class="title">Title</h1>' +
//                 '<p id = "text">Hello world!</p>' +
//                 '<button type = "button" class = "btn">Send</button>'


// let listItem = document.querySelector('.list-item');
// // listItem.remove();

// let ul = document.querySelector('ul');
// let p = document.createElement('p');

// ul.replaceChild(p, listItem);
// ul.replaceChildren(p);
// ul.removeChild(listItem);


// console.log(ul.children);
// console.log(listItem.parentElement);
// console.log(listItem.parentElement.children);

// let title = document.querySelector('.title');
// let h1 = document.createElement('h1');

// h1.textContent = 'Привет мир!';

// title.append(h1);
// title.prepend(h1);
// document.body.prepend(h1);
// title.before(h1);
// title.after(h1);

// console.log(title);
// console.log(h1);

// let listItem = document.querySelector('.list-item');

// console.log(listItem.nextElementSibling);
// console.log(listItem.previousElementSibling);


// let box = document.querySelector('.box');

// box.innerHTML = `
//           <h1>Title</h1>
//           <p>Hello world</p>
//           <button>Отправить</button>
// `

// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// let button = document.createElement('button');

// h1.textContent = 'Title';
// p.textContent = 'Hello world!';
// button.textContent = 'Send';

// box.append(h1);
// box.append(p);
// box.append(button);

// box.innerHTML = '<h1 class="title">Title</h1>' +
//                 '<p id="text">Hello world!</p>' +
//                 '<button type="button" class="btn">Send</button>' 



// let listItem = document.querySelector('.list-item');
// let ul = document.querySelector('ul');

// let p = document.createElement('p');
// ul.removeChild(listItem);

// listItem.remove();
// ul.replaceChild(p, listItem);
// ul.replaceChildren(p);

// let ul = document.querySelector('ul');
// let listItem = document.querySelector('.list-item');


// console.log(ul.children);
// console.log(listItem.parentElement);


// let base = [
//   {id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 8, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 9, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'},
//   {id: 10, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ducimus.', class: 'text'}

// ];

// let ul = document.createElement('ul');
// document.body.prepend(ul);

// base.forEach((item)=>{
//   ul.innerHTML += `<li id="${item.id}" class="${item.class}">${item.title}</>`
// });


// let base = [
//   {id: 1, img: 'dizayn1.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 2, img: 'dizayn2.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 3, img: 'dizayn3.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 4, img: 'dizayn4.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 5, img: 'dizayn5.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 6, img: 'dizayn6.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 7, img: 'dizayn7.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 8, img: 'dizayn8.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 9, img: 'dizayn9.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 10, img: 'dizayn6.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 11, img: 'dizayn11.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'},
//   {id: 12, img: 'dizayn12.png', title:'Дом для двух поколений', subtitle:'Уютная студия в ЖК Адмирал'}

// ]

// let row = document.querySelector('.row');
// base.forEach(item =>{
//   row.innerHTML += `<div class="card" id="${item.id}">
//                     <img class="card__img" src="./image/${item.img}">
//                     <h2 class="card__title">${item.title}</h2>
//                     <p class="card__subtitle">${item.subtitle}</p>
//                     </div>`
// });


// let h2 = document.querySelector('h2');



let h1 = document.createElement('h1');
let btnAdd = document.createElement('button');
btnAdd.textContent = 'Смотреть еще';
btnAdd.classList.add('btn__card-add');
document.body.append(btnAdd);
h1.textContent = 'Наши проекты';
h1.classList.add('main__title');
document.body.prepend(h1);

let base = [
  {id: 1, img: 'dizayn1.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 2, img: 'dizayn2.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 3, img: 'dizayn3.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 4, img: 'dizayn4.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 5, img: 'dizayn5.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 6, img: 'dizayn6.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 7, img: 'dizayn7.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 8, img: 'dizayn8.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 9, img: 'dizayn9.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 10, img: 'dizayn6.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 11, img: 'dizayn11.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  {id: 12, img: 'dizayn12.png', title: 'Дом для двух поколений', subtitle: 'Уютная студия в ЖК Адмирал'},
  
];

let row = document.querySelector('.row');

const addCard = ()=>{
  row.innerHTML = ''
      base.forEach((item)=>{
        row.innerHTML += `
                          <div class="card">
                              <img class="card__img" alt="${item.title}" src="./image/${item.img}">
                              <h2 class="card__title">${item.title}</h2>
                              <p class="card__subtitle">${item.subtitle}</p>
                              <button type="button" class="card__delete ${item.id}">Delete</button>
                          <div/>`
    });
}
addCard();

btnAdd.addEventListener('click', ()=>{
  base = [...base, {
      id: base.at(- 1).id + 1,
      img: 'dizayn1.png',
      title: 'Дом для двух поколений',
      subtitle: 'Уютная студия в ЖК Адмирал'
  }]
  
  addCard();
})

const deleteBtns = document.querySelectorAll('.card__delete');


const handlerClick = (e) =>{
  console.log(e);
  // const curentBtn = e.currentTarget;
}


deleteBtns.forEach((button)=>{
      button.addEventListener(('click', handlerClick));
})





