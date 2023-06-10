package com.scrum.gestorApp.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.scrum.gestorApp.persistence.entity.utils.tipoEstado;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "estados")
public class EstadoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE) //Ver que estrategia se usará
    private Long id;
    //Hace referencia al Id del Enum, para tratarlo por su Id
    @Enumerated(EnumType.ORDINAL)
    private tipoEstado tipo;

    @OneToMany(mappedBy = "estadoTarea")
    @Column(nullable = true)
    @JsonBackReference(value = "estado_tarea")
    private List<TareaEntity> tareaEstado = new ArrayList<>();

    public EstadoEntity(){}

    /***
     *
     * @param tipo tipo de estado de la tarea, representa las vistas
     */
    public EstadoEntity(tipoEstado tipo){
        this.tipo = tipo;
    }
}
