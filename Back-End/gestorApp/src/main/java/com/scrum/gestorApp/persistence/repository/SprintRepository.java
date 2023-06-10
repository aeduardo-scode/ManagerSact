package com.scrum.gestorApp.persistence.repository;

import com.scrum.gestorApp.persistence.entity.SprintEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface SprintRepository extends JpaRepository<SprintEntity, Long> {
    Optional<SprintEntity> findById(Long id);
}
