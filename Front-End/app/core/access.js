import { Credencial } from "./models/usuarioModel.js";
import { verificarAutenticacion, ingresar, decodeToken } from "./validations/verificarAuth.js";

export function postLogin(usuario) {
  return fetch('http://localhost:8081/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => {
      if (response.ok) {
        const authHeader = response.headers.get('Authorization');
        const token = authHeader ? authHeader.split(' ')[1] : null;
        if (token) {
          decodeToken(token);
          const green = new Credencial(usuario.usuario, token);
          localStorage.setItem("userAuthentication", JSON.stringify(green));
          //Retorna el index
          ingresar();
          alert("Usuario autenticado")
        }
      } else {
        alert("Credenciales Incorrectas");
      }

    })
    .catch(error => {
      // Manejar la respuesta del servidor en caso de error
      console.log(error);
      throw new Error('Error al iniciar sesión');
    });
}


export function postRegister(usuario) {
  return fetch('http://localhost:8081/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => {
      if (response.ok) {
        //SweetAlert
      } else {

      }
    })
    .catch(error => {
      // Manejar la respuesta del servidor en caso de error
      console.log(error);
      throw new Error('Error al registrarse');
    });
}