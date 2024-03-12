const hexadecimal = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];

const change = document.getElementById('Colorchange');
const color = document.querySelector('.text');

change.addEventListener("click", function() {
    var colorHexadecimal = "#";
    for(var i = 0; i < 6; i++){
        colorHexadecimal += hexadecimal[getNumbersRandom()];
    }

    color.textContent = colorHexadecimal;
    document.body.style.backgroundColor = colorHexadecimal;
})

function getNumbersRandom() {
    return Math.floor(Math.random()* hexadecimal.length);
}