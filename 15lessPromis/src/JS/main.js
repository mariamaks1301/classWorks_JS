
// let person = {
//     name: 'Maria',
//     isHappy: true
// }

// let p = new Promise((resolve, reject) => {
//     if(person.isHappy){
//         resolve(`${person.name} happy`)
//     }else{
//         reject(`${person.name} happyless`)
//     }
// }).then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
//         .finally(()=>console.log('It will work in any response'));

// console.log(p);



// FETCH

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res)=> res.json())
//     .then((res)=> console.log(res))
//     .catch((err)=>console.log('Произошла ошибка при запросе'))

// let userList = document.querySelector('.user__list');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>res.json())
//         .then((res)=>res.forEach(item => {
//             userList.innerHTML += `
//             <li>
//                 <h2>Name: ${item.name}</h2>
//                 <h2>Username: ${item.username}</h2>
//                 <p>Email: ${item.email}</p>
//                 <p>Phone: ${item.phone}</p>
//                 <p>Website: ${item.website}</p>


//             </li>
//             `
//         }))
//         .catch((err)=>console.log(err))


// WEATHER


let form  = document.querySelector('.form');
let formSearch = document.querySelector('.form__search');
let content = document.querySelector('.content');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formSearch.value}&appid=21ae17b55ff62ced846b2aab37531dd2`)
        .then((res)=>res.json())
            .then((res)=>{
                content.innerHTML = `
                <h2>Country: ${res.sys.country}</h2>
                <h2>City: ${res.name}</h2>
                <h2>Id: ${res.weather.at(0).id}</h2>
                <h3>Sky: ${res.weather[0].main}</h3>
                <h3>Description: ${res.weather.at(0).description}</h3>
                <h3>Icon: ${res.weather.at(0).icon}</h3>
                <h2>Base: ${res.base}</h2>

                <h2>Temp: ${res.main.temp}</h2>
                <h3>feels_like: ${res.main.feels_like}</h3>
                <h3>temp_min: ${res.main.temp_min}</h3>
                <h3>temp_max: ${res.main.temp_max}</h3>
                <h3>pressure: ${res.main.pressure}</h3>
                <h3>humidity: ${res.main.humidity}</h3>
                <h3>sea_level: ${res.main.sea_level}</h3>
                <h3>grnd_level: ${res.main.grnd_level}</h3>

                <h2>visibility: ${res.visibility}</h2>
               
                <h2>WindSpeed: ${res.wind.speed}</h2>
                <h3>WindDeg: ${res.wind.deg}</h3>
                <h3>WindGust: ${res.wind.gust}</h3>

                <h2>CloudsAll: ${res.clouds.all}</h2>

                <h2>Dt: ${res.dt}</h2>

                <h2>SysType: ${res.sys.type}</h2>
                <h3>SysId: ${res.sys.id}</h3>
                <h3>SysCountry: ${res.sys.country}</h3>
                <h3>SunRise: ${res.sys.sunrise}</h3>
                <h3>SunSet: ${res.sys.sunset}</h3>

                <h2>TimeZone: ${res.timezone}</h2>
                <h2>Id: ${res.id}</h2>
                <h2>Name: ${res.name}</h2>
                <h2>Cod: ${res.cod}</h2>

                




                

                  
                   

                `
            })
})
        