
import { mostrarHistoricos } from "../../asset/js/designs/historicoDesign.js";
import { Historico } from "../models/historicoModel.js";
//Almacenar el historico
const listaHistoricos = [];

export function almacenarHistorico(data) {
    for (let h = 0; h < data.length; h++) {
        const historico = new Historico(data[h].id, data[h].fecha, data[h].estadoBefore, data[h].estadoAfter, data[h].tareaId, data[h].tareaNombre); 
        listaHistoricos.push(historico);
    }
    recorrerListaHistorico(listaHistoricos);
}

function recorrerListaHistorico(lista){
    lista.forEach(element => {
        mostrarHistoricos(element);
    })
}