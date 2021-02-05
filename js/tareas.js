//logica del ejercicio

let selectionListado = document.querySelector('#listado');
let selectAviso = document.querySelector('#aviso');
// let selectCompletar = document.querySelector('#completar');
let selectNoTarea = document.querySelector('#noDatos');

let contador = 0;
let miprioridad;
let conterror = 0;

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

let eliminarTarea = document.querySelector('#tarea');

let selectPrioridad = document.querySelector('#seleccion');

selectPrioridad.addEventListener('change', getPrioridad);

let inputName = document.querySelector('#texto');

let guardarTarea = document.querySelector('#btn-guardar');

//evento para guardar prioridad
inputName.addEventListener('keydown', guardarNuevaTarea);
guardarTarea.addEventListener('click', guardarNuevaTarea);

function getPrioridad(event) {
    miprioridad = event.target.value;
    //console.log("la priorieadad es:" + miprioridad);

}

//longitud de la lista
function longitudLista(miLista) {
    let cont = 0;
    for (let i = 0; i < miLista.length; i++) {
        cont++;
    }
    return cont;
}

//corregir el mensaje del borrado.?
function guardarNuevaTarea(event) {

    if (event.type == 'click') {

        let tarea = inputName.value;
        console.log("mi tarea: " + tarea);
        let contador = longitudLista(listaTareas);

        if ((miprioridad == 'urgente' || miprioridad == 'diaria' || miprioridad == 'mensual') && (tarea != "")) {
            //creacion del objeto
            let file1 = {
                idTarea: contador,
                titulo: tarea,
                prioridad: miprioridad
            }
            selectAviso.innerHTML = "";

            listaTareas.push(file1);

        } else if (tarea != "" || miprioridad == undefined || miprioridad == "") {
            selectAviso.innerHTML = `<p>${'TIENES QUE INGRESAR LA TAREA O SELECCIONAR UNA PRIORIDAD'}</p>`;

        } else {
            if (tarea == "" && miprioridad != "") {
                selectAviso.innerHTML = `<p>${'TIENES QUE INGRESAR LA TAREA O SELECCIONAR UNA PRIORIDAD'}</p>`;
            }
        }

        printListado(listaTareas);
    }

}