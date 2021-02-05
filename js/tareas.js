//logica del ejercicio

let selectionListado = document.querySelector('#listado');
let selectAviso = document.querySelector('#aviso');
// let selectCompletar = document.querySelector('#completar');
let selectNoTarea = document.querySelector('#noDatos');

let contador = 0;
let miprioridad;
let conterror = 0;

//imprime el formato del articulo
const printListado = function(pListadoTareas) {

    selectionListado.innerHTML = "";

    for (let i = 0; i < pListadoTareas.length; i++) {
        let clase = (i % 2 == 0) ? 'fondoVerde' : 'fondoAzul';
        selectionListado.innerHTML += `<article>
            <div class="">
                <div class="${clase}">
                    <h3 id="tarea">${pListadoTareas[i].titulo}</h3>
                    <div class=${'cambio'}> 
                        <button onclick="Eliminar2(event, ${pListadoTareas[i].idTarea})">Eliminar</button>
                    </div>
                </div>
            </div>
        </article>`;

    }
}

printListado(listaTareas);