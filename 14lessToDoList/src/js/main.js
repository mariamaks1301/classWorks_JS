
let dataTodo = [
    {
        id: 1,
        text: 'Купить хлеб',
        isDone: true,
        isImportant: false,
        isChange: false,
    },
    {
        id: 2,
        text: 'Сделать домашнее задание',
        isDone: false,
        isImportant: false,
        isChange: false,
    },
    {
        id: 3,
        text: 'Погладить вещи',
        isDone: false,
        isImportant: false,
        isChange: false,
    }
];

let list = document.querySelector('.content__list');
let form = document.querySelector('.form');
let addField = document.querySelector('.form__field');
let addTask = document.querySelector('.form__btn');
let formSpinner = document.querySelector('.form__spinner');

const addDataForList = () =>{
    list.innerHTML = '';
    dataTodo.forEach((item)=>{
        list.innerHTML += `
        <li class="content__list-item">
                        <div class="content__list-item-left">
                            <span data-id="${item.id}" class="content__list-item-done ${item.isChange ? 'icon-pencil' : item.isDone ? 'icon-ok' : 'icon-ok-outline'}"></span>
                            <span data-id="${item.id}"  style="display: ${item.isChange ? 'none' : 'inline'}" style="text-decoration: ${item.isDone ? 'line-through' : 'none'}" class="content__list-item-text">${item.text}</span>
                            <input data-id="${item.id}"  style="display: ${item.isChange ? 'inline-block' : 'none'}" class="content__list-item-input" type="text" value="${item.text}">
                        </div>
                        <div>
                            <span style="display: ${item.isChange ? 'none' : 'inline'}" data-id="${item.id}" class="content__list-item-delete icon-cancel"></span>
                            <span style="display: ${item.isChange ? 'inline-block' : 'none'}" data-id="${item.id}" class="content__list-item-save">Save</span>
                        </div>

    
                    </li>` 
    });

    let allDoneBtn = document.querySelectorAll('.content__list-item-done');
    let allDeleteBtn = document.querySelectorAll('.content__list-item-delete');
    let allTextBtn = document.querySelectorAll('.content__list-item-text');
    let allSaveBtn = document.querySelectorAll('.content__list-item-save');


    
    Array.from(allDoneBtn).forEach((item)=>{
        item.addEventListener('click', ()=>{
            dataTodo = dataTodo.map((el)=>{
                if(el.id === +item.getAttribute('data-id')){
                    return {...el, isDone : !el.isDone}
                }
                return el
            })
            addDataForList();

        })
        
    })
    Array.from(allDeleteBtn).forEach((item)=>{
        item.addEventListener('click', ()=>{
            dataTodo = dataTodo.filter((el)=>{
                return el.id !== +item.getAttribute('data-id')
            })
            addDataForList();

        })
        
    })
    Array.from(allTextBtn).forEach((item)=>{
        item.addEventListener('click', ()=>{
            dataTodo = dataTodo.map((el)=>{
                if(el.id === +item.getAttribute('data-id')){
                    return {...el, isChange : true}
                }
                return el
            })
            addDataForList();

        })
        console.log(item.getAttribute('data-id'));
    })
    Array.from(allSaveBtn).forEach((item)=>{
        item.addEventListener('click', ()=>{
            let newText = item.parentElement.previousElementSibling.children[2].value
            dataTodo = dataTodo.map((el)=>{
                if(el.id === +item.getAttribute('data-id')){
                    return {...el, text: newText, isChange : false}
                }
                return el
            })
            addDataForList();

        })
        console.log(item.getAttribute('data-id'));
    })
   
}
addDataForList();


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    dataTodo = [...dataTodo, {
            id: dataTodo.length ? dataTodo.at(-1).id + 1 : 1,
            text: addField.value,
            isDone: false,
            isImportant: false,
            isChange: false,
        
    }]
    addField.value = '';
    addDataForList();
    formSpinner.style.display = 'inline';

    setTimeout(()=>{
        formSpinner.style.display = 'none';
    }, 1500)

    console.log(addField.value);
    console.log(dataTodo);
})