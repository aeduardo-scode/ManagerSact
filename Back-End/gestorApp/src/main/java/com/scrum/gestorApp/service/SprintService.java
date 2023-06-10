package com.scrum.gestorApp.service;

import com.scrum.gestorApp.service.dto.EstadoDTO;
import com.scrum.gestorApp.service.dto.SprintDTO;

import java.util.List;

public interface SprintService {
    public void crearSprint(SprintDTO sprint);
    public List<SprintDTO> listaSprint();
    public SprintDTO obtenerSprint(Long id);
    public void eliminarSprint(Long id);
    public void actualizarSprint(SprintDTO sprint, Long id);
}
