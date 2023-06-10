package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.EstadoEntity;
import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.service.dto.EstadoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;

@Mapper(componentModel = "spring")
public interface EstadoMapper {
    EstadoMapper INSTANCE = Mappers.getMapper(EstadoMapper.class);
    EstadoEntity toEntity(EstadoDTO estadoDTO, ArrayList<TareaEntity> listaTareas);
    EstadoDTO toDTO(EstadoEntity estadoEntity);
}
