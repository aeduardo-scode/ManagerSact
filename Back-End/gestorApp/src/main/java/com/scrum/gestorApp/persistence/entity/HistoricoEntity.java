package com.scrum.gestorApp.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@Table(name = "historicos")
public class HistoricoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Date fecha;
    private Long estadoBefore;
    private Long estadoAfter;
    private Long tareaId;
    private String tareaNombre;

    public HistoricoEntity(){}
}
