package com.scrum.gestorApp.persistence.repository;

import com.scrum.gestorApp.persistence.entity.HistoricoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface HistoricoRespository extends JpaRepository<HistoricoEntity, Long> {
    Optional<HistoricoEntity> findById(Long id);
}
