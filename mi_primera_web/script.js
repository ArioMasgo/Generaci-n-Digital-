// alert("hello word");
// let nombreProyecto = document.getElementsByTagName('h7'); // obtenemos el elemento con la clase subtitulo
// let contenido = nombreProyecto.innerHTML; // obtenemos el contenido del elemento
// console.log(contenido); // mostramos el contenido en la consola
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".menu");
  navBar.classList.toggle("active");
};
