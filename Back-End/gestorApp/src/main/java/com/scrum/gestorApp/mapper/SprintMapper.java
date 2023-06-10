package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.SprintEntity;
import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.service.dto.SprintDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;

@Mapper(componentModel = "spring")
public interface SprintMapper {
    SprintMapper INSTANCE = Mappers.getMapper(SprintMapper.class);

    SprintEntity toEntity(SprintDTO sprintDTO);
    SprintDTO toDTO(SprintEntity sprintEntity);
}
