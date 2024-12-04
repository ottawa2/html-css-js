// aseguramos que el HTML se haya cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function(){
    let nav = document.querySelector('#navegacion');
    // una forma de agregar elementos
    //let link = document.createElement('a');
    // link.href = 'https://google.com';
    // link.innerText = 'Google;
    // nav.appendChild(link);

    nav.innerHTML += <a href='https://google.com' target="_blank">Google</a>

    let aside = document.querySelector("aside")
    let button = document.createElement('button');
    button.innerText = 'Saludar';
    
    button.onclick = saludar
})

