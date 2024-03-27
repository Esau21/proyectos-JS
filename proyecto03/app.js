const btn = document.getElementById("Click");
const inputBox = document.getElementById("input-click");
const ulList = document.getElementById("list-container");

btn.addEventListener("click", function () {
  if (inputBox.value === "") {
    //Si no hay nada en la caja de texto del input pues se mencionara el alert que tienes que ingresar una tarea
    alert("Tienes que escribir una nueva tarea para poder agregarla");
  } else {
    //Si hay un valor en la caja del texto del input pues se va agregar la tarea
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ulList.appendChild(li);

    //Aqui hacemos la funcionalidad de mostrar el icono para hacer la funcion del eliminado
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  guardarData();
});

ulList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //Aqui comparamos si el elemnto del check esta presionado se mostrara la tarea tachada
      e.target.classList.toggle("checked");
      guardarData();
    } else if (e.target.tagName === "SPAN") {
      //Aqui una ves presionemos en el elmento del span o del icono pues la tarea sera removida
      e.target.parentElement.remove();
      guardarData();
    }
  },
  false
);

//Funcion para poder guardar nuestra data en el Storage

function guardarData() {
  localStorage.setItem("data", ulList.innerHTML);
}

function mostrarData()
{
    ulList.innerHTML = localStorage.getItem("data");
}
mostrarData();
