const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
    fetch(url).then((data) => data.json()).then((risposta) => getdata(risposta))
})

function getdata(data) {
    const {
        value: jokes
    } = data;
    content.textContent = jokes;
    img.classList.add('img-shake');
    setTimeout(() => {
        img.classList.remove('img-shake')
    }, 400);
}

// same code with promises

// const btn = document.querySelector('.btn');
// const content = document.querySelector('.content');
// const img = document.querySelector('.img')
// const url = "https://api.chucknorris.io/jokes/random";


// btn.addEventListener('click', () => {
//     getData(url)
//     .then((response) => displayData(response))
//     .catch((err) => console.log(err))
// });

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4) {
//                 return;
//             }

//             if (xhr.status === 200) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject({
//                     status: xhr.status,
//                     text: xhr.statusText,
//                 })
//             }

//         }
//     })

// }

// function displayData(data) {
//     img.classList.add('shake-img');
//     const {
//         value: joke
//     } = JSON.parse(data);
//     content.textContent = joke;
//  
//     setTimeout(() => {
//         img.classList.remove('shake-img');
//     }, 400);
// }
