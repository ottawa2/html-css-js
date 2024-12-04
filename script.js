//window.onload = function() {
    //mostrarAlerta();};

function mostrarAlerta() {
    window.alert('Welcome to my website');}

//function to change backgroun color    
function cambiarColorFondo() {
  const colorAleatorio = "#" + Math.floor(Math.random() * 16777215).toString(16);
   // Cambiar el color de fondo de la página
   document.body.style.backgroundColor = colorAleatorio;
}
// funciont to change paragraph content
function cambiarContenido() {
    // Cambia el texto del párrafo
    document.getElementById("parrafo").innerText = "¡El contenido del párrafo ha cambiado! da F5 para cambiarlo de nuevo!";
    
}
