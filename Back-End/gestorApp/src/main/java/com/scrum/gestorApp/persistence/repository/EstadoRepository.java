package com.scrum.gestorApp.persistence.repository;

import com.scrum.gestorApp.persistence.entity.EstadoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface EstadoRepository  extends JpaRepository<EstadoEntity, Long> {
    Optional<EstadoEntity> findById(Long id);
}
