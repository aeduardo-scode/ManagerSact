
//Para almacenar una tarea
export class Tarea{
    constructor(titulo, descripcion, fechaFin, peso, usuarioTarea, sprintTarea, estadoTarea){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.peso = peso; 
        this.usuarioTarea = usuarioTarea;
        this.sprintTarea = sprintTarea;
        this.estadoTarea = estadoTarea;
     }
}

//Retorna una tarea
export class TareaGet{
    constructor(id, titulo, descripcion, fechaFin, peso, sprintTarea, estadoTarea ){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.peso = peso; 
        this.sprintTarea = sprintTarea;
        this.estadoTarea = estadoTarea;
    }
}

//Para actualizar la tarea en ciertos campos
export class TareaPut{
    constructor(titulo, descripcion, fechaFin, peso){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.peso = peso;
    }
}