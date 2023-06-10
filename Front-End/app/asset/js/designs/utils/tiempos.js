//Para calcular las horas entre dos fechas
export function fechasHoras(fechaIni, fechaFin){

    let diferencia = fechaFin.getTime() - fechaIni.getTime();
    
    // Calcular las horas, minutos y segundos
    let segundos = Math.floor(diferencia / 1000) % 60;
    let minutos = Math.floor(diferencia / 1000 / 60) % 60;
    let horas = Math.floor(diferencia / 1000 / 60 / 60);
    
    let horasString =  horas < 10 ? "0" + horas : horas;
    let minutosString =  minutos < 10 ? "0" + minutos : minutos;
    let segundosString =  segundos < 10 ? "0" + segundos : segundos;
    
    
    // Formatea la diferencia en hh:mm:ss
    let diferenciaFormateada = 
    horas.toString().padStart(2, '0') + ':' +
    minutos.toString().padStart(2, '0') + ':' +
    segundos.toString().padStart(2, '0');
    
        return diferenciaFormateada;
    }

//Se calcula la barra de progreso del proyecto
export function calculoTareas(lista){
    let totales = lista.length;
    let complete = 0;

    for (let t = 0; t < lista.length; t++) {
        //Tareas completas
        if (lista[t].estadoTarea == "4") {complete++;}
        //Tareas en papelera
        if (lista[t].estadoTarea == "5") {totales--;}
    }
    //Se saca el porcentaje
    let progreso = (complete / totales) * 100;
    //Se modifica el elemento
    let barra_progreso = document.querySelector('#barra-progreso');
        barra_progreso.style.width = progreso+"%";
        barra_progreso.textContent = progreso.toFixed(2)+"%";
}


export function diferenciaDias(fechaInicial, fechaFinal) {
    // Se obtiene la diferencia en milisegundos
    const diferenciaTiempo = fechaFinal.getTime() - fechaInicial.getTime();
    // Convierte la diferencia en días
    const diferenciaEnDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
  
    return diferenciaEnDias;
  }  

  export function fechaFormat(fecha){
    const date = new Date(fecha);
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();
    let horas = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if (mes < 10) {mes = "0"+ mes;}
    if (dia < 10) {dia = "0"+ dia;}
    let newFecha = ano+"-"+mes+"-"+dia;
    return newFecha;
}


  // export function actualizarCronometro() {
//     // Si el tiempo llega a cero, detiene el cronómetro
//     if (horas == 0 && minutos == 0 && segundos == 0) {
//         clearInterval(intervalo);
//         return;
//     }

//     // Reduce un segundo al tiempo
//     segundos--;

//     if (segundos < 0) {
//         segundos = 59;

//         if (minutos > 0) {
//             minutos--;

//             if (minutos < 0) {
//                 minutos = 59;

//                 if (horas > 0) {
//                     horas--;
//                 }
//             }
//         }
//     }

//     // Formatea el cronómetro
//     var horasTexto = horas < 10 ? "0" + horas : horas;
//     var minutosTexto = minutos < 10 ? "0" + minutos : minutos;
//     var segundosTexto = segundos < 10 ? "0" + segundos : segundos;

//     // Actualiza el elemento del cronómetro
//     cronometro.textContent = horasTexto + ":" + minutosTexto + ":" + segundosTexto + "h";
// }
