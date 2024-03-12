const color = ["green",  "red", "rgba(133,122,200)", "#3b3f5c"];

const colorBtn = document.getElementById('Colorchange');
const text = document.querySelector('.text');

colorBtn.addEventListener('click', function(){
    const ramdomcolorBtn = 2;
    document.body.style.backgroundColor = color[ramdomcolorBtn];
});