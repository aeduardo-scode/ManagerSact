
//EndP0ints Usuarios
export function createUser(user) {
  return fetch('http://localhost:8081/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      alert("Se ha registrado");
    })
    .catch(error => {
      throw new Error('Error al crear el usuario');

    });
}

//EndPoints Tareas
export function createTask(task) {
  return fetch('http://localhost:8081/task/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task).trim()
  })
    .then(response => {
      if (response.ok) {
      } else {
        throw new Error('Error al crear la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(error => {
      console.error('Este es el error: ', error);
    });
}

import { almacenar, mostrarTareaEdit } from "./views/tareaView.js";

export function getTasks() {
  return fetch('http://localhost:8081/task', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => almacenar(data))
    .catch(error => {
      throw new Error('Error al mostrar las tareas');
    });
}

export function getTask(id) {
  return fetch('http://localhost:8081/task/' + id, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => mostrarTareaEdit(data))
    .catch(error => {
      throw new Error('Error al mostrar las tareas');
    });
}

export function putTask(id, task) {
  return fetch('http://localhost:8081/task/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task).trim()
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Tarea Actualizada',
          showConfirmButton: false,
          timer: 1500
        })
        setInterval(function(){location.reload();}, 2000);
      } else {
        throw new Error('Bad Request al editar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        throw new Error('Error al editar la tarea')
      });
}

export function putProgress(id) {
  return fetch('http://localhost:8081/task/progress/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Tarea in Progress',
          showConfirmButton: false,
          timer: 1500
        })
        setInterval(function(){location.reload();}, 2000);
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes asignar la tarea a un Sprint'
        })
      });
}

export function putSprint(idTarea, id) {
  return fetch('http://localhost:8081/task/sprint/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(idTarea)
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Tarea asignada al Sprint Nº '+id,
          showConfirmButton: false,
          timer: 1500
        })
        // alert("Sprint asignado a tarea con Id: "+idTarea);
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        Swal.fire({
          icon: 'info',
          title: '!Atención!',
          text: 'Selecciona un Sprint en el listado.'
        })
      });
}

export function putBlock(id){
  return fetch('http://localhost:8081/task/block/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        throw new Error('Error al editar la tarea')
      });
}

export function putCompleted(id){
  return fetch('http://localhost:8081/task/completed/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Tarea Completada',
          showConfirmButton: false,
          timer: 1500
        })
        setInterval(function(){location.reload();}, 2000);
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        throw new Error('Error al editar la tarea')
      });
}

export function putPapelera(id){
  return fetch('http://localhost:8081/task/papelera/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        throw new Error('Error al editar la tarea')
      });
}

export function putBacklog(id){
  return fetch('http://localhost:8081/task/backlog/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
      } else {
        throw new Error('Bad Request al actualizar la tarea'); // Puedes lanzar una excepción personalizada
      }
    })
    .catch(
      error => {
        throw new Error('Error al editar la tarea')
      });
}


//EndPoint Sprint

export function createSprint(sprint) {
  return fetch('http://localhost:8081/sprints/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sprint)
  })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: 'Sprint creado exitosamente!',
        showConfirmButton: false,
        timer: 1500
      })
      setInterval(function(){location.reload();}, 2000);
    })
    .catch(error => {
      throw new Error('Error al crear el sprint');
    });
}

import { mostrarSprint } from "./views/sprintView.js";

export function getSprints() {
  return fetch('http://localhost:8081/sprints', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => { mostrarSprint(data) })
    .catch(error => {
      throw new Error('Error al mostrar los sprints');
    });
}

import { mostrarDatosSprint } from "../../asset/js/designs/sprintDesign.js";

export function getSprint(id) {
  return fetch('http://localhost:8081/sprints/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => mostrarDatosSprint(data))
    .catch(error => {
      throw new Error('Error al mostrar el Sprint');
    });
}


//EndPoint Historico

import { almacenarHistorico } from "./views/historicoView.js";

export function getHistoricos() {
  return fetch('http://localhost:8081/historicos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => almacenarHistorico(data))
  .catch(error => {
    throw new Error('Error al mostrar los historicos');
  });
}



