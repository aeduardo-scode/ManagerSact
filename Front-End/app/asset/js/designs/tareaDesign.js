import { fechasHoras } from "../designs/utils/tiempos.js";

//Tarea en Backlog
export function taskBacklog(e) {
    //Al desplegarse la tarea se oculta el boton de editar. Es por el ID del boton de editar también.
    let principal = document.createElement('div'); //Principal
    principal.dataset.identificador = e.id;

    //Boton para editar
    let divbtns = document.createElement('div');
    divbtns.classList.add("d-flex", "justify-content-between");

    let formEditar = document.createElement('form');
    formEditar.classList.add("form-edit");

    let divEditar = document.createElement('div');

    let btn = document.createElement('button');
    btn.type = "submit";
    btn.classList.add("btn", "btn-warning", "btn-sm", "h-25", "btnEdit");
    btn.dataset.bsToggle = "modal";
    btn.dataset.bsTarget = "#editarTareaModal";
    btn.value = e.id;

    let i = document.createElement('i');
    i.alt = "edit";
    i.classList.add("bi", "bi-pencil-fill");

    btn.appendChild(i);
    divEditar.appendChild(btn);
    formEditar.appendChild(divEditar);

    //Boton para enviar a Process (Oculto)
    let divAsig = document.createElement("div");

    let formAsig = document.createElement('form');
    formAsig.classList.add("form-asig");
    formAsig.method = "POST";

    let asignarProgress = document.createElement('button');
    asignarProgress.type = 'submit';
    asignarProgress.classList.add('btn', 'btn-ligh', 'btn-sm', 'bg-light', 'mx-1', 'btnAsig', 'd-none');
    asignarProgress.value = e.id;

    let i2 = document.createElement('i');
    i2.classList.add('bi', 'bi-arrow-up-right');

    asignarProgress.appendChild(i2);
    divAsig.appendChild(asignarProgress);
    formAsig.appendChild(divAsig);

    //Boton para asignar Sprint (Oculto)
    let divSprint = document.createElement("div");

    let formAsigSprint = document.createElement('form');
    formAsigSprint.classList.add("form-asig-sprint");
    formAsigSprint.method = "POST";

    let asignarSprint = document.createElement('button');
    asignarSprint.type = 'submit';
    asignarSprint.classList.add('btn', 'btn-ligh', 'btn-sm', 'bg-info', 'mx-1', 'btnAsigSprint', 'd-none');
    asignarSprint.value = e.id;

    let i3 = document.createElement('i');
    i3.classList.add('bi', 'bi-arrow-up');

    asignarSprint.appendChild(i3);
    divSprint.appendChild(asignarSprint);
    formAsigSprint.appendChild(divSprint);

    divbtns.appendChild(formAsigSprint);

    let contIzq = document.createElement('div');
    contIzq.classList.add('d-flex');
    contIzq.appendChild(formAsig);
    contIzq.appendChild(formEditar);

    divbtns.appendChild(contIzq);

    //////////////
    let article = document.createElement('article');
    article.classList.add("card", "text-bg-light", "mb-3", "w-100");
    article.dataset.bsToggle = "collapse";
    article.dataset.bsTarget = "#" + e.id;
    article.ariaBusy = e.id;
    let carta = document.createElement('div');
    carta.classList.add("collapse", "card-body")
    carta.id = e.id;
    let titulo = document.createElement('div');
    titulo.classList.add("card-header");
    titulo.textContent = e.titulo;
    let cuerpo = document.createElement('p');
    cuerpo.classList.add("card-text");
    cuerpo.textContent = e.descripcion;

    article.appendChild(titulo);
    carta.appendChild(cuerpo);
    article.appendChild(carta);

    principal.appendChild(divbtns);
    principal.appendChild(article);


    document.querySelector("#backlog").appendChild(principal);
}

//Tarea Sprint
export function taskSprint(e) {
    //Al desplegarse la tarea se oculta el boton de editar. Es por el ID del boton de editar también.
    let principal = document.createElement('div'); //Principal
    principal.dataset.identificador = e.id;

    //Boton para editar
    let divbtns = document.createElement('div');
    divbtns.classList.add("d-flex", "justify-content-between");

    let formEditar = document.createElement('form');
    formEditar.classList.add("form-edit");

    let divEditar = document.createElement('div');

    let btn = document.createElement('button');
    btn.type = "submit";
    btn.classList.add("btn", "btn-warning", "btn-sm", "h-25", "btnEdit");
    btn.dataset.bsToggle = "modal";
    btn.dataset.bsTarget = "#editarTareaModal";
    btn.value = e.id;

    let i = document.createElement('i');
    i.alt = "edit";
    i.classList.add("bi", "bi-pencil-fill");

    btn.appendChild(i);
    divEditar.appendChild(btn);
    formEditar.appendChild(divEditar);

    //Boton para enviar a Process (Oculto)
    let divAsig = document.createElement("div");

    let formAsig = document.createElement('form');
    formAsig.classList.add("form-asig");
    formAsig.method = "POST";

    let asignarProgress = document.createElement('button');
    asignarProgress.type = 'submit';
    asignarProgress.classList.add('btn', 'btn-ligh', 'btn-sm', 'bg-light', 'mx-1', 'btnAsig', 'd-block');
    asignarProgress.value = e.id;

    let i2 = document.createElement('i');
    i2.classList.add('bi', 'bi-arrow-up-right');

    asignarProgress.appendChild(i2);
    divAsig.appendChild(asignarProgress);
    formAsig.appendChild(divAsig);

    //Boton para asignar Sprint (Oculto)
    let divSprint = document.createElement("div");

    let formAsigSprint = document.createElement('form');
    formAsigSprint.classList.add("form-asig-sprint");
    formAsigSprint.method = "POST";

    let asignarSprint = document.createElement('button');
    asignarSprint.type = 'submit';
    asignarSprint.classList.add('btn', 'btn-ligh', 'btn-sm', 'bg-info', 'mx-1', 'btnAsigSprint', 'd-block');
    asignarSprint.value = e.id;

    let i3 = document.createElement('i');
    i3.classList.add('bi', 'bi-arrow-up');

    asignarSprint.appendChild(i3);
    divSprint.appendChild(asignarSprint);
    formAsigSprint.appendChild(divSprint);

    divbtns.appendChild(formAsigSprint);

    let contIzq = document.createElement('div');
    contIzq.classList.add('d-flex');
    contIzq.appendChild(formAsig);
    contIzq.appendChild(formEditar);

    divbtns.appendChild(contIzq);

    //////////////
    let article = document.createElement('article');
    article.classList.add("card", "text-bg-light", "mb-3", "w-100");
    article.dataset.bsToggle = "collapse";
    article.dataset.bsTarget = "#" + e.id;
    article.ariaBusy = e.id;
    let carta = document.createElement('div');
    carta.classList.add("collapse", "card-body")
    carta.id = e.id;
    let titulo = document.createElement('div');
    titulo.classList.add("card-header");
    titulo.textContent = e.titulo;
    let cuerpo = document.createElement('p');
    cuerpo.classList.add("card-text");
    cuerpo.textContent = e.descripcion;

    article.appendChild(titulo);
    carta.appendChild(cuerpo);
    article.appendChild(carta);

    principal.appendChild(divbtns);
    principal.appendChild(article);


    document.querySelector("#sprint").appendChild(principal);
}
//Tarea en Progress
export function taskProgress(e) {

    let tr = document.createElement('tr');
    let id = document.createElement('td');
    id.textContent = e.sprintTarea;
    let titulo = document.createElement('td');
    titulo.textContent = e.titulo;

    let dateI = new Date();
    let dateF = new Date(e.fechaFin);
    let hora = document.createElement('td');
    hora.textContent = fechasHoras(dateI, dateF) + "h.";

    let botones = document.createElement('td');
    botones.classList.add('d-inline-flex');
    let formBlock = document.createElement('form');
    formBlock.classList.add('form-block');
    formBlock.method = 'POST';

    let block = document.createElement('button');
    block.type = 'submit';
    block.classList.add('btn', 'btn-danger', 'btn-sm', 'btnBlock');
    block.textContent = 'Block';
    block.value = e.id;

    let separador = document.createElement('span');
    separador.classList.add('mx-2');
    separador.textContent = '|';

    let formCompleted = document.createElement('form');
    formCompleted.classList.add('form-completed');;
    // formBlock.action = 
    formCompleted.method = 'POST';
    let completed = document.createElement('button');
    completed.type = 'submit';
    completed.classList.add('btn', 'btn-success', 'btn-sm', 'btnCompleted');
    completed.textContent = 'Completed';
    completed.value = e.id;

    tr.appendChild(id);
    tr.appendChild(titulo);
    tr.appendChild(hora);
    //Formularios
    formBlock.appendChild(block);
    formCompleted.appendChild(completed);
    botones.appendChild(formBlock);
    botones.appendChild(separador);
    botones.appendChild(formCompleted);
    tr.appendChild(botones);

    document.querySelector('#progress > table > tbody').appendChild(tr);
}

//Tarea en Block
export function taskBlock(e) {
    let tr = document.createElement('tr');
    let id = document.createElement('td');
    id.textContent = e.sprintTarea;
    let titulo = document.createElement('td');
    titulo.textContent = e.titulo;
    let hora = document.createElement('td');
    let dateI = new Date();
    let dateF = new Date(e.fechaFin);
    hora.textContent = fechasHoras(dateI, dateF) + "h.";
    let botones = document.createElement('td');
    botones.classList.add('d-inline-flex');
    let formDescart = document.createElement('form');
    formDescart.classList.add('form-descart');
    // formBlock.action = 
    formDescart.method = 'POST';
    let papelera = document.createElement('button');
    papelera.type = 'submit';
    papelera.style = 'background: #ff7c39'; //ffa460
    papelera.classList.add('btn', 'btn-sm', 'btnDescart', 'text-light');
    papelera.textContent = 'Descartar';
    papelera.value = e.id;

    tr.appendChild(id);
    tr.appendChild(titulo);
    tr.appendChild(hora);
    //Formulario
    formDescart.appendChild(papelera);
    botones.appendChild(formDescart);
    tr.appendChild(botones);

    document.querySelector('#block > table > tbody').appendChild(tr);

}

//Tarea en Completed
export function taskCompleted(e) {
    let tr = document.createElement('tr');

    let id = document.createElement('td');
    id.textContent = e.sprintTarea;

    let titulo = document.createElement('td');
    titulo.textContent = e.titulo;

    
    let hora = document.createElement('td');
    let dateI = new Date();
    let dateF = new Date(e.fechaFin);
    let fechaCulminacion = fechasHoras(dateI, dateF);
    if (dateI.getTime() < dateF.getTime()) {
        hora.classList.add('text-success','fw-bold');
        hora.textContent = "+"+fechaCulminacion + "h.";
    }else{
        hora.classList.add('text-danger','fw-bold');
        hora.textContent = "00:00:00h.";
    }

    tr.appendChild(id);
    tr.appendChild(titulo);
    tr.appendChild(hora);

    document.querySelector('#completed > table > tbody').appendChild(tr);
}

//Tarea en Papelera
//...

export function taskPapelera(e) {
    let tr = document.createElement('tr');
    let id = document.createElement('th');
    id.scope = "row";
    id.textContent = e.id;

    let titulo = document.createElement('td');
    titulo.textContent = e.titulo;

    let descripcion = document.createElement('td');
        descripcion.textContent = e.descripcion;
    let fechaI = new Date();

    let fechaF = document.createElement('td');
    if (e.fechaFin >= fechaI) {
        fechaF.classList.add("text-danger");
        fechaF.textContent = "Tarea Caducada";
    }else{
        fechaF.textContent = e.fechaFin;
    }

    let porciento = document.createElement('td');
        porciento.textContent = e.peso + "%";
        
    let tdForm = document.createElement('td');

    let form = document.createElement('form');
        form.method = "POST";
        form.classList.add('form-papelera');
    
    let rescatar = document.createElement('button');
        rescatar.type = "submit";
        rescatar.classList.add('btn', 'btn-success', 'btn-sm', 'btnPapelera');
        rescatar.textContent = "Rescatar";
        rescatar.value=e.id;

    tr.appendChild(id);
    tr.appendChild(titulo);
    tr.appendChild(descripcion);
    tr.appendChild(fechaF);
    tr.appendChild(porciento);
        form.appendChild(rescatar);
        tdForm.appendChild(form);
    tr.appendChild(tdForm);

    document.querySelector('#form-papelera > tbody').appendChild(tr);
    
}
