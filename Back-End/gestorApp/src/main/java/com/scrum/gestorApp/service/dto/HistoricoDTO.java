package com.scrum.gestorApp.service.dto;

import lombok.Data;

import java.util.Date;
@Data
public class HistoricoDTO {
    private Long id;
    private Date fecha;
    private Integer estadoBefore;
    private Integer estadoAfter;
    private Integer tareaId;
    private String tareaNombre;
}
