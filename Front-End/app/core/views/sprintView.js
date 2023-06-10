import { SprintGet, SprintTime } from "../models/sprintModel.js";
import { tablaSprintDesign } from "../../asset/js/designs/sprintDesign.js";

const listaSprints = [];

const listaTiempo = [];

export function getFormSprint(){

    const tituloSprint = document.querySelector('#tituloSprint').value;
    const fechaFinSprint = document.querySelector('#fechaFinalizacionSprint').value;

    if (tituloSprint.trim() === '') {
        alert('Por favor, ingresa un titulo sprint válido');
        return null;
    }

    if (fechaFinSprint.trim() === '') {
        alert('Por favor, ingresa una fecha valida sprint válida');
        return null;
    }
    console.log(tituloSprint, fechaFinSprint);
    
        return {
            titulo: tituloSprint,
            timeFinal: fechaFinSprint
        }
   
}

export function mostrarSprint(data){
    for (let i = 0; i < data.length; i++) {
        
        let dateFin = new Date(data[i].timeFinal);
        let formatFin = dateFin.getDate()+"/"+(dateFin.getMonth()+1)+"/"+dateFin.getFullYear();
        const sprint = new SprintGet(data[i].id, data[i].titulo, formatFin);
        
        let dateInicio = new Date(data[i].timeInicio);
        listaSprints.push(sprint);
        
        const sprintTime = new SprintTime(dateInicio, dateFin);
        listaTiempo.push(sprintTime);

    }
    recorrerListSprint(listaSprints);
}


//Para listar en la APP todas las tareas según su estado.
function recorrerListSprint(lista){
    lista.forEach(element => {
        tablaSprintDesign(element);
    });
}

//Recorre la lista de Sprint y Asigna el seleccionado
export function recorrerFormSprint(){
    let formMarcar = document.querySelectorAll('.form-sprint');
    for(let i = 0; i < formMarcar.length; i++){
        const element = formMarcar[i].firstElementChild;
        element.addEventListener('click', e => {
            e.preventDefault();
            const sprintId = element.querySelector('.btnEdit').value;
            return sprintId;
        })
    }
}

