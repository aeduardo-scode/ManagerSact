import { Sprint } from "../models/sprintModel.js";
import { createSprint, getSprints, getSprint } from "../api.js";
import { getFormSprint, recorrerFormSprint } from "../views/sprintView.js";

export function crearSprint(){

    const dataForm = getFormSprint();

    const sprint = new Sprint(dataForm.titulo, dataForm.timeFinal);
    createSprint(sprint)
    .then(createSprint => {})
    .catch(error => {
        alert(error.message);
      });
}

export function retornarSprints(){

    return new Promise((resolve, reject) => {
        getSprints()
        .then(getSprints => {
            resolve();
        })
        .catch(error => {
            reject(error);
          });
    }) 
}


export function retornarSprint(id){
    getSprint(id)
        .then(getSprint => {
        })
        .catch(error => {
            alert(error.message);
        });
}