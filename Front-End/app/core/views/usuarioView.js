
export function getFormRegister() {

    const nombreInput = document.querySelector('#nombre').value;
    const apellidosInput = document.querySelector('#apellidos').value;
    const usuarioInput = document.querySelector('#usuario').value;
    const claveInput = document.querySelector('#clave').value;

    if (nombreInput.trim() === '') {
        alert('Por favor, ingresa un nombre válido');
        return null;
    }

    if (apellidosInput.trim() === '') {
        alert('Por favor, ingresa apellidos válidos');
        return null;
    }

    if (usuarioInput.trim() === '') {
        alert('Por favor, ingresa un nombre de usuario válido');
        return null;
    }

    if (claveInput.trim() === '') {
        alert('Por favor, ingresa una contraseña válida');
        return null;
    }

    return {
        nombre: nombreInput,
        apellidos: apellidosInput,
        usuario: usuarioInput,
        clave: claveInput
    }

}


export function getLogin() {
    const user = document.querySelector("#usuario").value;
    const pass = document.querySelector("#clave").value;

    if (user.trim() === '') {
        alert('Por favor, ingresa un nombre de usuario');
        return null;
    }

    if (pass.trim() === '') {
        alert('Por favor, ingresa una contraseña');
        return null;
    }

    return {
        usuario: user,
        clave: pass
    }
}