package com.scrum.gestorApp.persistence.repository;

import com.scrum.gestorApp.persistence.entity.TareaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TareaRepository extends JpaRepository<TareaEntity, Long> {
    Optional<TareaEntity> findById(Long id);
}
