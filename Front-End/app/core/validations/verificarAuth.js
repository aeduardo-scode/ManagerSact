
import jwt_decode from '../../node_modules/jwt-decode';
// import jwt_decode from 'jwt-decode';


export function autenticacion(){
    const token = localStorage.getItem("token");

    if (token) {
        
    }else{

    }
}

export function ingresar(){
    location.href = "http://127.0.0.1:5500/src/index.html";
}

export function verificarAutenticacion(){

}


export function decodeToken(token){
    const decode =  jwt_decode(token);
    console.log(decode);
}

