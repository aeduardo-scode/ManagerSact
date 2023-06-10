package com.scrum.gestorApp.service;

import com.scrum.gestorApp.service.dto.TareaDTO;
import com.scrum.gestorApp.service.dto.UsuarioDTO;

import java.util.List;

public interface TareaService {
    public void crearTarea(TareaDTO tarea);
    public List<TareaDTO> listaTareas();
    public TareaDTO obtenerTarea(Long id);
    public void eliminarTarea(Long id);
    public void actualizarTarea(TareaDTO tarea, Long id);
    public void actualizarProgress(Long id);
    public void actualizarBlock(Long id);
    public void actualizarCompleted(Long id);
    public void actualizarPapelera(Long id);
    public void asignarSprint(Long idTarea, Long id);

}
