package com.scrum.gestorApp.service.dto;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.persistence.entity.utils.tipoEstado;
import lombok.Data;

import java.util.List;

@Data
public class EstadoDTO {
    private Long id;
    private tipoEstado tipo;
    private List<TareaEntity> tareaEstado;
}
