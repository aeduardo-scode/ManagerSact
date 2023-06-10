package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import com.scrum.gestorApp.service.dto.UsuarioDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioMapper INSTANCE = Mappers.getMapper(UsuarioMapper.class);
    UsuarioEntity toEntity(UsuarioDTO usuarioDTO, ArrayList<TareaEntity> listaTareas);
    UsuarioDTO toDTO(UsuarioEntity usuarioEntity);

}
