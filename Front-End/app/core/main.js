
import { createTarea, getTareas, getTarea, editTarea, tareaProgress, tareaSprint, tareaBlock, tareaCompleted, tareaPapelera, tareaBacklog } from "./controllers/tareaController.js";
import { crearSprint, retornarSprints, retornarSprint } from "./controllers/sprintController.js";
import { retornarHistoricos } from "./controllers/historicoController.js";



//Tareas Formularios
document.addEventListener('DOMContentLoaded', () => {

    const crearTarea = document.querySelector('#form-task');

    crearTarea.addEventListener('submit', event => {
        event.preventDefault();
        createTarea();
    });

    const editarTarea = document.querySelector('#form-editar');

    editarTarea.addEventListener('submit', event => {
        event.preventDefault();
        editTarea();
    })
})


//Tareas promesas por retonar.
document.addEventListener('DOMContentLoaded', () => {

    //Aqui se actualizan las tareas en sus botones de edición particular
    getTareas()
        .then(() => {
            //Al editar los valores de la tarea
            const formEdit = document.querySelectorAll('.form-edit');
            for (let i = 0; i < formEdit.length; i++) {
                const element = formEdit[i];
                element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnEdit').value;
                    getTarea(tareaId);
                })
            }
        })
        .then(() => {
            //Al asignar al sprint
            const formAsigSprint = document.querySelectorAll('.form-asig-sprint');

            for (let k = 0; k < formAsigSprint.length; k++) {
                const element = formAsigSprint[k];
                element.addEventListener('submit', e => {
                    const sprintId = document.querySelector('#numSprint').textContent;
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnAsigSprint').value;
                    tareaSprint(tareaId, sprintId)
                })
            }
        })
        .then(() => {
            const formAsig = document.querySelectorAll('.form-asig');

            for (let j = 0; j < formAsig.length; j++) {
                const element = formAsig[j]; element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnAsig').value;
                    //Antes de asginar, se espera la aprobación del usuario.
                    Swal.fire({
                        title: 'Deseas asignar la tarea a la tabla Progress?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Guardar',
                        denyButtonText: `No guardar`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            tareaProgress(tareaId);
                        } else if (result.isDenied) {
                            Swal.fire('Sin cambios', '', 'info')
                        }
                    })
                })
            }

        })
        .catch(error => {
            // error.message = "Debes asignar un Sprint primero";
            alert(error.message);
        })
        .then(() => {
            //Al asignar a Block
            const formBlock = document.querySelectorAll('.form-block');

            for (let b = 0; b < formBlock.length; b++) {
                const element = formBlock[b];
                element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnBlock').value;
                    Swal.fire({
                        title: 'Estas seguro de la acción?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, a Block!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            tareaBlock(tareaId);
                        }
                      })
                    
                })
            }

        })
        .then(() => {
            //Al asignar a Completed
            const formCompleted = document.querySelectorAll('.form-completed');

            for (let c = 0; c < formCompleted.length; c++) {
                const element = formCompleted[c];
                element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnCompleted').value;
                    Swal.fire({
                        title: 'Estas seguro de la acción?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, a Completed!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            tareaCompleted(tareaId);
                        }
                      })
                })
            }

        })
        .then(() => {
            //Al asignar a Block
            const formBlock = document.querySelectorAll('.form-descart');

            for (let p = 0; p < formBlock.length; p++) {
                const element = formBlock[p];
                element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnDescart').value;
                    
                    Swal.fire({
                        title: 'Deseas enviar a la papelera?',
                        text: "Descartar una tarea implica, reiniciar los tiempos de la tarea.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, a Papelera!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            tareaPapelera(tareaId);
                        }
                      })
                })
            }

        })
        .then(() => {
            //Al asignar a Backlog
            const formPapelera = document.querySelectorAll('.form-papelera');

            for (let p = 0; p < formPapelera.length; p++) {
                const element = formPapelera[p];
                element.addEventListener('submit', e => {
                    e.preventDefault();
                    const tareaId = element.querySelector('.btnPapelera').value;
                    tareaBacklog(tareaId);
                })
            }
        })
        .catch(error => {
            console.log(error.line);
        });
})

// ------------------------------------------------------------------------------ //

//Sprint Formularios
document.addEventListener('DOMContentLoaded', () => {

    const crearSpri = document.querySelector('#form-sprint');

    crearSpri.addEventListener('submit', event => {
        event.preventDefault();
        crearSprint();
    })
})

// Sprint promesas por retonar.
document.addEventListener('DOMContentLoaded', () => {
    retornarSprints()
        .then(() => {
            const formMarcar = document.querySelectorAll('.form-sprint');
            for (let i = 0; i < formMarcar.length; i++) {
                const element = formMarcar[i];
                element.addEventListener('click', e => {
                    e.preventDefault();
                    const sprintId = element.querySelector('.marcar').value;
                    retornarSprint(sprintId);
                })
            }
        })
        .catch(error => {
            alert(error.line);
        });
})

// ------------------------------------------------------------------------------ //

document.addEventListener('DOMContentLoaded', () => {
    retornarHistoricos();
})




