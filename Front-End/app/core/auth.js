
import { loguearse, registrarse } from "./controllers/authController.js";

document.addEventListener('DOMContentLoaded', () => {

    const login = document.querySelector("#login-form")
    login.addEventListener("submit", e => {
        e.preventDefault();
        loguearse();
    })

    const registro = document.querySelector("#form-register")
    registro.addEventListener("submit", e => {
        e.preventDefault();
        registrarse();
    })

});

