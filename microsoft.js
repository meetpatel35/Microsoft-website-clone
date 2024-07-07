let ham = document.querySelector('.hamburger');
ham.addEventListener('click',()=>{
    document.querySelector('.features').classList.toggle('sidebarGo');
})


let down = document.querySelector('.all');
down.addEventListener('mouseover',()=>{
    document.querySelector('.trans').classList.toggle('dropdown');
})

document.querySelector('.trans').addEventListener('mouseleave',()=>{
    document.querySelector('.trans').classList.toggle('dropdown');
})