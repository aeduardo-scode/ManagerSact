package com.scrum.gestorApp.service;

import com.scrum.gestorApp.service.dto.EstadoDTO;
import java.util.List;

public interface EstadoService {
    public String crearEstado(EstadoDTO estado);
    public List<EstadoDTO> listaEstados();
    public EstadoDTO obtenerEstado(Long id);
    public void eliminarEstado(Long id);
    public void actualizarEstado(EstadoDTO estado, Long id);
}
