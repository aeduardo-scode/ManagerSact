package com.scrum.gestorApp.service.dto;
import lombok.Data;

import java.util.Date;

@Data
public class TareaDTO {
    private Long id;
    private String titulo;
    private String descripcion;
    private Date fechaInicio;
    private Date fechaFin;
    private int peso;
    private Integer usuarioTarea;
    private Integer estadoTarea;
    private Integer sprintTarea;
}
