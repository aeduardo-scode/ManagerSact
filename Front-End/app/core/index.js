
//Listado y organizacion de tareas en el Backlog
const b = document.querySelector('#backlog');
//Elemento que se le agrega estilo al comenzar el drag y culminar con el drop
let lineas = document.querySelector('#sprint-style');

let listaSprint = []

Sortable.create(b, {
    group: {
        name: "backlog-sprint"
    },
    animation: 150,
    chosenClass: "selected",
    dragClass: "drag",
    dataIdAttr: "data-identificador",
    store: {
        set: function(sortable){
            let orden = sortable.toArray();
            localStorage.setItem("ordenBacklog", orden.join('|'));
        },
        get: function(sortable){
            let orden = localStorage.getItem("ordenBacklog");
            return  orden ? orden.split('|') : [];
        }
    },
    onEnd: (e) => {
        //Para ejecutar una función una vez se haya movido el elemento (finalizar)
        lineas.classList.remove('arrastra');
        addBotonAsignarProgress();
    },
    onStart: () => {
        lineas.classList.add('arrastra');
    }
});

//Listado y organizacion de tareas en el Sprint
const s = document.querySelector('#sprint')

Sortable.create(s, {
    group: {
        name: "backlog-sprint"
    },
    animation: 150,
    chosenClass: "selected",
    dragClass: "drag",
    dataIdAttr: "data-identificador",
    store: {
        set: function(sortable){
            let orden = sortable.toArray();
            localStorage.setItem("ordenSprint", orden.join('|'));
        },
        get: function(){
            let orden = localStorage.getItem("ordenSprint");
            return  orden ? orden.split('|') : [];
        }
    },
    onEnd: () => {
        //Para ejecutar una función una vez se haya movido el elemento (finalizar)
        removeBotonAsignarProgress();

    },
    onStart: () => {
    }
});
// Añaden los botones formularios para actualizar la tarea cuando está en el Sprint.
function addBotonAsignarProgress(){
    let lineasSprint = document.querySelectorAll('#sprint > div > div > div > form.form-asig > div > button');
    for (let i = 0; i < lineasSprint.length; i++){
        lineasSprint[i].classList.remove('d-none');
    }

    let asignarSprint = document.querySelectorAll('#sprint > div > div > form.form-asig-sprint > div > button');
    for (let j = 0; j < asignarSprint.length; j++){
        asignarSprint[j].classList.remove('d-none');
    }
}

function removeBotonAsignarProgress(){
    let lineasBacklog = document.querySelectorAll('#backlog > div > div > div > form.form-asig > div > button.btnAsig');
    for (let i = 0; i < lineasBacklog.length; i++){
        lineasBacklog[i].classList.add('d-none');
    }

    let asignarSprint = document.querySelectorAll('#backlog > div > div > form.form-asig-sprint > div > button');
    for (let j = 0; j < asignarSprint.length; j++){
        asignarSprint[j].classList.add('d-none');
    }
}

//////////////////////////////////////////////////////////////////////////////////
