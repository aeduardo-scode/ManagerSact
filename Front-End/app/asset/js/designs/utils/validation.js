
// ---------------- Se manejan la comprobación de los datos antes de enviar al servidor --------------------- // 

// Capturamos el error de la funcion
let errors = "";

//Elemento que contiene el error
let span = document.createElement("span");

let li = document.querySelector('#listar');
li.appendChild(span);

let div = document.querySelector('#errores');

function estado(span, div) {
    span.textContent = errors;
    div.style.display = "block";
}


function validarDatos() {

    if (!validarNombre()) {
        estado(span, div);
        return false;
    } else if (!validarApellidos()) {
        estado(span, div);
        return false;
    } else if (!validarUsuario()) {
        estado(span, div);
        return false;
    } else if (!validarClave()) {
        estado(span, div);
        return false;
    } else {
        div.style.display = "none";
        // alert('Usuario insertado correctamente');
        return true;
    }

}

//Funciones de validación

function validarNombre() {
    const nombre_usu = document.querySelector('#nombre').value;

    if (nombre_usu.trim() === '') {
        errors = 'Campo nombre vacío \n';
        return false;
    }
    //Empieza por mayúscula, seguida de minúscula, opcionalmente pueden haber 2 nombres. 

    const regexNom = /^(([A-Z]{1}[a-z]{1,10})[ ]?){1,2}$/;

    if (!(regexNom.test(nombre_usu))) {
        errors = 'Campo nombre no sigue el formato: Nombre o Nombre nombre \n';
        return false;
    }

    return true;
}

function validarApellidos() {
    const apellidos = document.querySelector('#apellidos').value;

    if (apellidos.trim() === '') {
        errors = 'Campo apellidos vacío \n';
        return false;
    }

    //Empieza por mayúscula, seguido de minúsculas, debe contener 2 apellidos.

    const regexApe = /^(([A-Z]{1}[a-z]{1,10})[ ]?){2}$/;

    if (!(regexApe.test(apellidos))) {
        errors = 'Campo apellidos no sigue el formato: Apellido apellido \n';
        return false;
    }

    return true;
}

function validarUsuario() {
    const usuario = document.querySelector('#usuario').value;

    if (usuario.trim() === '') {
        errors = 'Campo usuario vacío \n';
        return false;
    }

    const userRegex = /^[A-Z][A-Za-z]{2,4}-\d{2,4}$/;

    if (!(userRegex.test(usuario))) {
        errors = 'Campo usuario no sigue el formato: Iniciales _ numeros \n';
        return false;
    }

    return true;

}

function validarClave() {
    const clave = document.querySelector('#clave').value;

    if (usuario.trim() === '') {
        errors = 'Campo clave vacío \n';
        return false;
    }
    //Contiene al menos una letra minúscula.
    // Contiene al menos una letra mayúscula.
    // Contiene al menos un dígito.
    // Contiene al menos uno de los caracteres especiales: @, $, !, %, *, ?, o &.
    // Tiene una longitud mínima de 8 caracteres.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!(passwordRegex.test(clave))) {
        errors = 'Campo clave debe ser fuerte: Al menos una min, una mayus, un digito, un especial. \n';
        return false;
    }

    return true;
}