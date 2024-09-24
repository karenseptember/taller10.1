// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}


document.addEventListener("DOMContentLoaded", (e) => {
// Creacion de un let y aplico el metodo filter y le indico como quiero que sea filtrado en este caso sea solo strings.
 let filtrado = strangeArray.filter((palabra)=> typeof palabra === 'string');
// Al let creado le indicamos el metodo sort el cual por defecto no ordena alfabeticamente.
filtrado.sort()
//Por ultimo llamamos a la funcion brindada a la cual es la que hace el recorrido del array filtrado.
showList(filtrado)
});


    