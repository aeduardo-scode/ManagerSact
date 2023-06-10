//Datatable Historico en Modal

$(document).ready(function () {
    $('#table-historico').DataTable();
});

export function mostrarHistoricos(data) {
    let tr = document.createElement('tr');

    let id = document.createElement('td');
    id.textContent = data.id;

    let before = document.createElement('td');
    let bean = document.createElement('span');
    bean.classList.add('btn', 'btn-sm', 'text-light');
    bean.style = "background-color: #5e5e5e";
    bean.textContent = labelEstado(data.estadoBefore);

    before.appendChild(bean);

    let after = document.createElement('td');
    let bean2 = document.createElement('span');
    bean2.classList.add('btn', 'btn-sm', 'text-light');
    bean2.style = "background-color: #56008c";
    bean2.textContent = labelEstado(data.estadoAfter);

    after.appendChild(bean2);

    let tarea = document.createElement('td');
    tarea.textContent = data.tareaNombre;
    tarea.classList.add('fst-italic');

    let idTarea = document.createElement('td');
    idTarea.textContent = data.tareaId

    let fecha = document.createElement('td');
    fecha.textContent = data.fecha;

    tr.appendChild(id);
    tr.appendChild(before);
    tr.appendChild(after);
    tr.appendChild(idTarea);
    tr.appendChild(tarea);
    tr.appendChild(fecha);

    const table = $('#table-historico').DataTable();

    table.row.add(tr).draw();
}

function labelEstado(estado) {
    switch (estado) {
        case 1:
            return "Backlog"
        case 2:
            return "Progress"
        case 3:
            return "Block"
        case 4:
            return "Completed"
        case 5:
            return "Papelera"
        default:
            return "Sprint"
    }
}