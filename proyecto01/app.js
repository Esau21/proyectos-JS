const colores = ["green", "red", "rgba(120, 133, 233)", "#59D5E0"];

const btnColor = document.getElementById('Colorchange');
const color = document.querySelector(".text");

btnColor.addEventListener("click", function() {
    const changeColor = getRandomNumber();
    console.log(changeColor); 

    document.body.style.backgroundColor = colores[changeColor];
    color.textContent = colores[changeColor]
});


function getRandomNumber(){
    return Math.floor(Math.random()*colores.length)
}