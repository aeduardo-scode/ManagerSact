package com.scrum.gestorApp.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;

@Data
@Entity
@Table(name = "tareas")
public class TareaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String descripcion;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date fechaInicio;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date fechaFin;

    @Column(nullable = false)
    private int peso;


    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "usuario_id")
    @JsonBackReference(value="user_tarea")
    @ToString.Exclude
    private UsuarioEntity usuarioTarea;

    @ManyToOne(optional = true)
    @JoinColumn(name = "sprint_id")
    private SprintEntity sprintTarea;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "estado_id")
    @JsonBackReference(value="estado_tarea")
    @ToString.Exclude
    private EstadoEntity estadoTarea;


    public TareaEntity(){}

    /***
     *
     * @param titulo Titulo de una tarea
     * @param descripcion Descripcion de una tarea
     * @param fechaFin Fecha de fin de la tarea
     * @param peso Peso de la tarea dentro del proyecto
     */

    public TareaEntity(String titulo, String descripcion, Date fechaFin, int peso){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaFin = fechaFin;
        this.peso = peso;
    }

}

