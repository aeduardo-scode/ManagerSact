package com.scrum.gestorApp.persistence.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;

@Data
@Entity
@Table(name = "sprints")
public class SprintEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date timeInicio;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date timeFinal;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date timeDo;

    public SprintEntity(){}
    /***
     *
     * @param titulo Titulo del Sprint
     * @param timeFinal Fecha para culminar el sprint
     */
    public SprintEntity(String titulo, Date timeInicio, Date timeFinal){
        this.titulo = titulo;
        this.timeInicio = timeInicio;
        this.timeFinal = timeFinal;
    }

}
