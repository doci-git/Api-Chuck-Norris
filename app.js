const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('img');

btn.addEventListener('click',()=>{
fetch(url).then((data)=> data.json()).then((risposta)=>getdata(risposta))
})

function getdata(data) {
    const { 
        value:jokes
    }= data;
    content.textContent= jokes;
    img.classList.add('')
}