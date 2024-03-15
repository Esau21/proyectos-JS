const hexadecimales = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const changeBtn = document.getElementById('Btn');
const colors = document.querySelector('.text');


changeBtn.addEventListener("click", function(){
    let radomColores = "#";
    for(let i = 0; i < 8; i++){
        radomColores += hexadecimales[getNumbersColors()];
    }

    colors.textContent = radomColores;
    document.body.style.backgroundColor = radomColores;
});


function getNumbersColors(){
    return Math.floor(Math.random()* hexadecimales.length)
}

