import { createUser } from "../api.js";
import { Usuario } from "../models/usuarioModel.js";
import { getFormRegister } from "../views/usuarioView.js";
// import { validarDatos } from "../validation.js";

export function createUsuario() {
    //Capturamos los datos del formulario

    const dataForm = getFormRegister();

    const usuario = new Usuario(dataForm.nombre, dataForm.apellidos, dataForm.usuario, dataForm.clave);

    createUser(usuario)
        .then(createUser => {
            alert('Usuario Autenticado');
        })
        .catch(error => {
            alert(error.message);
        });
}