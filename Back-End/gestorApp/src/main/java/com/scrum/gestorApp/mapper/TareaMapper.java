package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.service.dto.TareaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TareaMapper {
    TareaMapper INSTANCE = Mappers.getMapper(TareaMapper.class);
    @Mapping(target ="usuarioTarea.id", source = "tareaDTO.usuarioTarea")
    @Mapping(target ="sprintTarea.id", source = "tareaDTO.sprintTarea")
    @Mapping(target ="estadoTarea.id", source = "tareaDTO.estadoTarea")
    TareaEntity toEntity(TareaDTO tareaDTO);
    @Mapping(target ="usuarioTarea", source = "tareaEntity.usuarioTarea.id")
    @Mapping(target ="sprintTarea", source = "tareaEntity.sprintTarea.id")
    @Mapping(target ="estadoTarea", source = "tareaEntity.estadoTarea.id")
    TareaDTO toDTO(TareaEntity tareaEntity);
}
