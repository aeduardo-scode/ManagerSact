import { postLogin } from '../access.js';
import { Authentication } from "../models/usuarioModel.js";
import { getLogin } from "../views/usuarioView.js";

export function loguearse() {

    const datos = getLogin();

    let usuario = new Authentication(datos.usuario, datos.clave);

    postLogin(usuario)
        .then(postLogin => {
        })
        .catch(error => {
            // showErrorMessage(error.message);
            alert(error.message);
        });

}