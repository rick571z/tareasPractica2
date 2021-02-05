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

//=========================================================================================

function getPrioridad(event) {
    miprioridad = event.target.value;

}

function longitudLista(miLista) {
    let cont = 0;
    for (let i = 0; i < miLista.length; i++) {
        cont++;
    }
    return cont;
}

function guardarNuevaTarea(event) {

    if (event.type == 'click') {
        let tarea = inputName.value;
        let contador = longitudLista(listaTareas);

        if ((miprioridad == 'urgente' || miprioridad == 'diaria' || miprioridad == 'mensual') && (tarea != "")) {

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


//=========================================================================================

let nuevaSeccion = document.querySelector('#seccion');
nuevaSeccion.addEventListener('change', getCambioPrioridad);

function getCambioPrioridad(event) {

    let tipoPrioridad = event.target.value;
    let preList;
    let catidadTarea = 0;

    if (tipoPrioridad != "") {
        switch (tipoPrioridad) {

            case 'urgente':
                preList = filtrarPorPrioridad(tipoPrioridad, listaTareas);
                catidadTarea = longitudLista(preList);
                if (catidadTarea == 0) {

                    selectNoTarea.innerHTML = `<p>${'NO HAY TAREA Urgente !!!!'}</p>`;
                } else {
                    printListado(preList);
                    selectNoTarea.innerHTML = "";
                }
                break;

            case 'diaria':
                preList = filtrarPorPrioridad(tipoPrioridad, listaTareas);
                catidadTarea = longitudLista(preList);
                if (catidadTarea == 0) {
                    selectNoTarea.innerHTML = `<p>${'NO HAY TAREA Diaria !!!!'}</p>`;
                } else {
                    printListado(preList);
                    selectNoTarea.innerHTML = "";
                }
                break;

            case 'mensual':
                preList = filtrarPorPrioridad(tipoPrioridad, listaTareas);
                catidadTarea = longitudLista(preList);
                if (catidadTarea == 0) {
                    selectNoTarea.innerHTML = `<p>${'NO HAY TAREA Mensual !!!!'}</p>`;
                } else {
                    printListado(preList);
                    selectNoTarea.innerHTML = "";
                }
                break;

            default:

        }

    } else {
        printListado(listaTareas);
        selectNoTarea.innerHTML = "";
    }
}

//funcion que calcula los objetos con una prioridad determinada
//retorna una lista con los objetos de un tipo de prioridad
function filtrarPorPrioridad(miPrioridad, listaDePrioridades) {
    const miListaPrioridad = listaDePrioridades.filter(valor => valor.prioridad == miPrioridad);
    return miListaPrioridad;
}