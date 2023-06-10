import { Credencial } from "./models/usuarioModel.js";

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
            const authHeader =  response.headers.get('Authorization');
            const token = authHeader ? authHeader.split(' ')[1] : null;
            if (token) {
              
              let green = new Credencial(usuario.usuario, token);
              localStorage.setItem("userAuthentication", JSON.stringify(green));

            alert("Usuario autenticado")
            location.href = "http://127.0.0.1:5500/public/index.html";
            }
          }else{
            alert("Credenciales Incorrectas");
          }
            
        })
        .catch(error => {
          // Manejar la respuesta del servidor en caso de error
          console.log(error);
          throw new Error('Error al iniciar sesión');
        });
}