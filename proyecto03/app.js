const btnCounterIncrease = document.getElementById("Increase");
const buttomDecrease = document.getElementById("Decrease");
const buttomReset = document.getElementById("Reset");
const value = document.querySelector("#value");


let counter = 0;

btnCounterIncrease.addEventListener("click", function() {
    counter++;
    value.style.color = '#00DFA2';
    value.innerHTML = counter;
});

buttomDecrease.addEventListener("click", function() {
    counter--
    value.style.color = '#F45050';
    value.innerHTML = counter;
});

buttomReset.addEventListener("click", function(){
    counter = 0;
    value.style.color = '#000000'
    value.innerHTML = counter;
});

