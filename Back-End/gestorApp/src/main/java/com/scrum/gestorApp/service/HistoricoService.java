package com.scrum.gestorApp.service;

import com.scrum.gestorApp.service.dto.HistoricoDTO;

import java.util.List;

public interface HistoricoService {
    public String crearHistorico(HistoricoDTO tarea);
    public List<HistoricoDTO> listaHistoricos();
    public HistoricoDTO obtenerHistorico(Long id);
    public void eliminarHistorico(Long id);
    public void actualizarHistorico(HistoricoDTO tarea, Long id);
}
