package com.scrum.gestorApp.service.dto;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UsuarioDTO {
    private Long id;
    private String nombre;
    private String apellidos;
    private String usuario;
    private String clave;

    private List<TareaEntity> listTarea;
}
