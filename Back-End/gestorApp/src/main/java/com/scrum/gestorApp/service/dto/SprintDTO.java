package com.scrum.gestorApp.service.dto;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class SprintDTO {
    private Long id;
    private String titulo;
    //Condicionar para que se cree el objeto una vez finalizadas todas las tareas del Sprint
    private Date timeDo;
    //Valor que se tomará en cuanta para poder implementar el contador
    private Date timeFinal;
    private Date timeInicio;
}
