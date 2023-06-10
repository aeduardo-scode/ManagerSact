package com.scrum.gestorApp.persistence.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "usuarios", uniqueConstraints = {@UniqueConstraint(columnNames = {"usuario"})})
public class UsuarioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE) //Ver que estrategia se usará (AUTOINCREMENT?)
    private Long id;

    @NotBlank(message = "Nombre es requerido")
    @Column(nullable = false)
    private String nombre;

    @NotBlank(message = "Apellidos son requeridos")
    @Column(nullable = false)
    private String apellidos;

    @NotBlank(message = "Username es requerido")
    @Column(nullable = false, unique = true)
    private String usuario;
    @NotBlank(message = "Clave es requerida")
    @Column(nullable = false)
    private String clave;

    @OneToMany(mappedBy = "usuarioTarea")
    @Column(nullable = true)
    @JsonManagedReference(value="user_tarea")
    private List<TareaEntity> listTarea = new ArrayList<>();

    public UsuarioEntity(){}
    /***
     * @param usuario pseudo del usuario
     * @param clave contraseña del usuario
     * @param nombre nombre del usuario
     * @param apellidos apellidos del usuario
     */
    public UsuarioEntity(String nombre, String apellidos, String usuario, String clave){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.clave = clave;
    }
}
