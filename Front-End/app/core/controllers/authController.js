import { postLogin, postRegister } from '../access.js';
import { Authentication, Usuario } from "../models/usuarioModel.js";
import { getLogin, getFormRegister } from "../views/usuarioView.js";

export function loguearse() {

    const datos = getLogin();

    let usuario = new Authentication(datos.usuario, datos.clave);

    postLogin(usuario)
        .then(postLogin => {})
        .catch(error => {
            alert(error.message);
        });

}

export function registrarse() {

    const datos = getFormRegister();

    let usuario = new Usuario(datos.nombre, datos.apellidos, datos.usuario, datos.clave);

    postRegister(usuario)
        .then(postRegister => {})
        .catch(error => {
            alert(error.message);
        });


}