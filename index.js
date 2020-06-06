// VARIABLES ////
const carrito = document.querySelector('#carrito');
const kayaks = document.querySelector('#lista-kayaks');
const listaKayaks = document.querySelector('#lista-carrito #contenedor-carrito');


//LISTENERS ////

cargarEventListeners();
function cargarEventListeners(){
    //Dispara cuando se presiona agregar carrito
    kayaks.addEventListener('click', comprarKayak);
}

//FUNCIONES ////
    //funcion que añade el kayaks al carrito
    function comprarKayak (e) {
        e.preventDefault();
        //delegation para agregar al carrito
        if(e.target.classList.contains('agregar-carrito')) {
            const kayaks = e.target.parentElement.parentElement;
            //agregamos el kayaks seleccionado para tomar sus datos
            leerDatosKayak(kayaks);
        };
    
    }
    
        //lee los datos del kayaks
    function leerDatosKayak (kayaks) {
        const infoKayak = {
            imagen: kayaks.querySelector('img').src,
            titulo: kayaks.querySelector('.titulo').textContent,
            precio: kayaks.querySelector('.precio').textContent,
            id: kayaks.querySelector('button').getAttribute('data-id')
        }
        insertarCarrito(infoKayak);
    }
    
        //Muestra el kayaks seleccionado en el carrito
    function insertarCarrito (kayaks) {
        const row = document.createElement('div');
        row.innerHTML = `
            
            <img src="${kayaks.imagen}" width="100">
            <h1>${kayaks.titulo}</h1>
            <h1>${kayaks.precio}</h1>
            <a href="#" class="borrar-kayaks" data-id="${kayaks.id}">X</a>
        
        `;
        listaKayaks.appendChild(row);
    }