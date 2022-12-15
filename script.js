let meme = document.getElementById('meme');
let title = document.getElementById('title');
let btn = document.getElementById('btn');


let api = "https://meme-api.com/gimme";

async function getMeme(){
    const response = await fetch(api);
    const data = await response.json();
    title.innerHTML = `${data.title}`;
    meme.innerHTML = `
    <img src="${data.url}" alt="" >
    `
    console.log(data)
}
btn.addEventListener('click',getMeme);
getMeme();