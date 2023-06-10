package com.scrum.gestorApp.persistence.repository;

import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {

    Optional<UsuarioEntity> findById(Long id);
    Optional<UsuarioEntity> findOneByUsuario(String usuario);
//    Optional<UsuarioEntity> findByUsuario(String username);
}
