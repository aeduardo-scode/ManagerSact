package com.scrum.gestorApp.mapper;

import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import com.scrum.gestorApp.service.dto.CredencialDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CredentialMapper {
    CredentialMapper INSTANCE = Mappers.getMapper(CredentialMapper.class);
    UsuarioEntity toEntity(CredencialDTO credencials);
    CredencialDTO toDTO(UsuarioEntity usuarioEntity);
}
