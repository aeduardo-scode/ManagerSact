import { getHistoricos } from "../api.js";

export function retornarHistoricos() {
    return new Promise((resolve, reject) => {
        getHistoricos()
            .then(getHistoricos => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    })
}