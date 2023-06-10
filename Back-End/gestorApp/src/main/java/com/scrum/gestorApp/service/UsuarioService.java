package com.scrum.gestorApp.service;

import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import com.scrum.gestorApp.service.dto.UsuarioDTO;

import java.util.List;

public interface UsuarioService {
    public String crearUsuario(UsuarioDTO usuario);
    public List<UsuarioDTO> listaUsuarios();
    public UsuarioDTO obtenerUsuario(Long id);
    public void eliminarUsuario(Long id);
    public void actualizarUsuario(UsuarioDTO usuario, Long id);

}
