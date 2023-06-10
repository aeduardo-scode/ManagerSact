
export class Historico{
    constructor(id, fecha, estadoBefore, estadoAfter, tareaId, tareaNombre){
        this.id = id;
        this.fecha = fecha;
        this.estadoBefore = estadoBefore;
        this.estadoAfter = estadoAfter;
        this.tareaId = tareaId;
        this.tareaNombre = tareaNombre;
    }
}