
//Crear un usuario
export class Usuario {
    constructor(nombre, apellidos, usuario, clave){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.clave = clave;
    }
}

//Credenciales de Inicio de Sesión
export class Credencial {
    constructor(usuario, token){
        this.usuario = usuario;
        this.token = "Bearer "+token;
    }
}

//Autenticación del Usuario
export class Authentication {
    constructor(usuario, clave){
        this.usuario = usuario;
        this.clave = clave;
    }
}