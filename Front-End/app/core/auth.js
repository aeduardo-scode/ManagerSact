
import { loguearse } from "./controllers/authController.js";

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#login-form").addEventListener("submit", e => {
        e.preventDefault();
        loguearse();
    })

});

