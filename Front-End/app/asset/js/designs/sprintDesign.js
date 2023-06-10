import { diferenciaDias } from "../designs/utils/tiempos.js";
export function tablaSprintDesign(e){
    let tr = document.createElement("tr");

    let id = document.createElement("td");
        id.textContent = e.id;

    let titulo = document.createElement("td");
        titulo.textContent = e.titulo;
    
    let fechaFinalizar = document.createElement("td");
        fechaFinalizar.textContent = e.timeFinal;

        //Se debe agregar el formulario

    let botones = document.createElement("td");

    let formMarcar = document.createElement("form");
        formMarcar.classList.add('form-sprint', 'text-center');

    let btnMarcar = document.createElement("button");
        btnMarcar.type = "submit";
        btnMarcar.textContent = "Marcar";
        btnMarcar.classList.add('btn','btn-primary','btn-sm', 'marcar')
        btnMarcar.value = e.id;

    tr.appendChild(id);
    tr.appendChild(titulo);
    tr.appendChild(fechaFinalizar);
        formMarcar.appendChild(btnMarcar);
        botones.appendChild(formMarcar);
    tr.appendChild(botones);

    document.querySelector('#lista-sprints > div > footer > table > tbody').appendChild(tr);

}

export function mostrarDatosSprint(data){
    const numSprint = document.querySelector('#numSprint');
          numSprint.textContent = data.id;
    const tituSprint = document.querySelector('#tituSprint');
          tituSprint.textContent = data.titulo;

          //Se calcula el tiempo en días para mostrar en el contador.
          const fechaInicio = new Date();
          const fechaFin = new Date(data.timeFinal);
          let dias = diferenciaDias(fechaInicio,fechaFin);

    const crono = document.querySelector('#cronometro');
          crono.textContent = "+"+dias+".Días";
    
}


