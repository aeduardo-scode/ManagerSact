import { createTask, getTasks, getTask, putTask, putProgress, putSprint, putBlock, putCompleted, putPapelera, putBacklog } from "../api.js";
import { Tarea, TareaPut } from "../models/tareaModel.js";
import { getFormTarea, getFormTareaEditar } from "../views/tareaView.js";


export function createTarea() {

    const dataForm = getFormTarea();

    const tarea = new Tarea(dataForm.titulo, dataForm.descripcion, dataForm.fechaFin, dataForm.peso, 1, 1);

    createTask(tarea)
        .then(createTask => {
            // Se debe mostrar dialogo "Tarea Creada";
            location.reload();
        })
        .catch(error => {
            alert(error.message);
        });
}

export function editTarea() {

    const dataForm = getFormTareaEditar();
    const tarea = new TareaPut(dataForm.titulo, dataForm.descripcion, dataForm.fechaFin, dataForm.peso);
    putTask(dataForm.id, tarea)
        .then(putTask => {
        })
        .catch(error => {
            alert(error.message);
        });


}
//Retornar tareas en general
export function getTareas() {
    return new Promise((resolve, reject) => {
        getTasks()
            .then(getTasks => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    })
}

//Retornar tarea especifica
export function getTarea(id) {
    getTask(id)
        .then(getTask => {//Se carga en el elemento.
        })
        .catch(error => {
            alert(error.message);
        });
}


export function tareaProgress(id) {
    putProgress(id)
        .then(putProgress => { })
        .catch(error => {
            alert(error.message);
        });
}

export function tareaSprint(idTarea, id) {
    putSprint(idTarea, id)
        .then(putSprint => {//location.reload();
        })
        .catch(error => {
            alert(error.message);
        });
}

export function tareaBlock(id) {
    putBlock(id)
        .then(putBlock => { location.reload(); })
        .catch(error => {
            alert(error.message);
        });
}

export function tareaCompleted(id) {
    putCompleted(id)
        .then(putCompleted => { })
        .catch(error => {
            alert(error.message);
        });
}

export function tareaPapelera(id) {
    putPapelera(id)
        .then(putPapelera => { location.reload(); })
        .catch(error => {
            alert(error.message);
        });
}

export function tareaBacklog(id) {
    putBacklog(id)
        .then(putBacklog => { location.reload(); })
        .catch(error => {
            alert(error.message);
        });
}
