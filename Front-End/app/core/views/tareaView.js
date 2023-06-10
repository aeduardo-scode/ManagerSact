import { TareaGet } from "../models/tareaModel.js";
import { calculoTareas, fechaFormat } from "../../asset/js/designs/utils/tiempos.js";
import { taskBacklog, taskBlock, taskCompleted, taskPapelera, taskProgress, taskSprint} from "../../asset/js/designs/tareaDesign.js";

//Se cargan todas las tareas antes de utilizar.
const listaTareas = [];

let editor = new FroalaEditor('#editorTarea');

export function getFormTarea() {

    const tituloInput = document.querySelector('#tituloTarea').value;
    const editorValue = editor.el.innerText;
    const fechaInput = document.querySelector('#fechaFinalizacionTarea').value;
    const pesoInput = document.querySelector('#porcentajeTarea').value;

    if (tituloInput.trim() === '') {
        alert('Por favor, ingresa un titulo válido');
        return null;
    }

    if (editorValue.trim() === '') {
        alert('Por favor, ingresa una descripcion válidos');
        return null;
    }

    if (fechaInput.trim() === '') {
        alert('Por favor, ingresa una fecha válido');
        return null;
    }

    if (pesoInput.trim() === '') {
        alert('Por favor, ingresa un peso válida');
        return null;
    }
    console.log("getFormTarea: "+fechaInput)
    return {
        titulo: tituloInput,
        descripcion: editorValue,
        fechaFin: fechaInput,
        peso: pesoInput
    }

}

//Se rescatan los valores de las tareas en la Base de datos
export function almacenar(data) {
    for (let i = 0; i < data.length; i++) {
        const tarea = new TareaGet(data[i].id, data[i].titulo, data[i].descripcion, data[i].fechaFin, data[i].peso, data[i].sprintTarea, data[i].estadoTarea);
        listaTareas.push(tarea);
    }
    //Para mostrar las tareas en el Front
    recorrerListTarea(listaTareas);
    //Para calcular el número de tareas y clasificarlas (Barra progreso)
    calculoTareas(listaTareas);
}

//Para listar en la APP todas las tareas según su estado.
function recorrerListTarea(lista) {
    lista.forEach(element => {
        //Backlog
        if (element.estadoTarea == '1' && element.sprintTarea == null) {
            taskBacklog(element);
            if (document.querySelector('#noHayBacklog') != null ) {
                document.querySelector('#noHayBacklog').remove();
            }
        }
        //Sprint
        if (element.estadoTarea == '1' && element.sprintTarea != null) {
            taskSprint(element);
        }
        //Progress
        if (element.estadoTarea == '2') {
            taskProgress(element);
            if (document.querySelector('#noHayProgress') != null ) {
                document.querySelector('#noHayProgress').remove();
            }
        }
        //Block
        if (element.estadoTarea == '3') {
            taskBlock(element);
            if (document.querySelector('#noHayBlock') != null ) {
                document.querySelector('#noHayBlock').remove();
            }
        }
        //Completed
        if (element.estadoTarea == '4') {
            taskCompleted(element);
            if (document.querySelector('#noHayCompleted') != null ) {
                document.querySelector('#noHayCompleted').remove();
            }
        }
        //Papelera
        if (element.estadoTarea == '5') {
            taskPapelera(element);
            if (document.querySelector('#noHayPapelera') != null ) {
                document.querySelector('#noHayPapelera').remove();
            }
        }   

    });

}

//Tarea para editar
let tareaEditar = 0;

export function mostrarTareaEdit(data){
    
    const tituloEditar = document.querySelector('#tituloEditar');
    const descripcionEditar = document.querySelector('#descripcionEditar');
    const fechaFinEditar = document.querySelector('#fechaFinEditar');
    const pesoEditar = document.querySelector('#pesoEditar');

    tareaEditar = data.id;
    tituloEditar.value = data.titulo;
    descripcionEditar.value = data.descripcion;
    fechaFinEditar.value = fechaFormat(data.fechaFin);
    pesoEditar.value = data.peso;
  
}

export function getFormTareaEditar(){
    const tituloEditar = document.querySelector('#tituloEditar').value;
    const descripcionEditar = document.querySelector('#descripcionEditar').value;
    const fechaFinEditar = document.querySelector('#fechaFinEditar').value;
    console.log("TareaView: "+ fechaFinEditar);
    const pesoEditar = document.querySelector('#pesoEditar').value;

    if (tituloEditar.trim() === '') {
        alert('Por favor, ingresa un titulo válido');
        return null;
    }

    if (descripcionEditar.trim() === '') {
        alert('Por favor, ingresa una descripcion válidos');
        return null;
    }

    if (fechaFinEditar.trim() === '') {
        alert('Por favor, ingresa una fecha válido');
        return null;
    }

    if (pesoEditar.trim() === '') {
        alert('Por favor, ingresa un peso válida');
        return null;
    }

    return {
        id: tareaEditar,
        titulo: tituloEditar,
        descripcion: descripcionEditar,
        fechaFin: fechaFinEditar,
        peso: pesoEditar
    };
}






