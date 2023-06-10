package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.HistoricoEntity;
import com.scrum.gestorApp.service.dto.HistoricoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface HistoricoMapper {
    HistoricoMapper INSTANCE = Mappers.getMapper(HistoricoMapper.class);
    HistoricoEntity toEntity(HistoricoDTO historicoDTO);
    HistoricoDTO toDTO(HistoricoEntity historicoEntity);
}
