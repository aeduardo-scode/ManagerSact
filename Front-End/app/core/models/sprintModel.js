
export class Sprint{
    constructor(titulo, timeFinal){
        this.titulo = titulo;
        this.timeFinal = timeFinal;
    }
}

export class SprintGet{
    constructor(id, titulo, timeFinal){
        this.id = id;
        this.titulo = titulo;
        this.timeFinal = timeFinal;
    }
}

export class SprintTime{
    constructor(timeInicio, timeFinal){
        this.timeInicio = timeInicio;
        this.timeFinal = timeFinal;
    }
}