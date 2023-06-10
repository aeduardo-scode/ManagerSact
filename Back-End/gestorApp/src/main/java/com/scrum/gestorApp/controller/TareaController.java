package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.TareaService;
import com.scrum.gestorApp.service.dto.TareaDTO;
import com.scrum.gestorApp.service.dto.UsuarioDTO;
import com.scrum.gestorApp.service.implement.TareaSerImplement;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@AllArgsConstructor
@RequestMapping("/task")
public class TareaController {

    private final TareaSerImplement tareaService;

    @PostMapping("/create")
    public ResponseEntity crearTarea(@RequestBody TareaDTO tarea){
        tareaService.crearTarea(tarea);
        return ResponseEntity.ok("200");
    }

    @GetMapping
    public List<TareaDTO> TareasList(){
        return this.tareaService.listaTareas();
    }

    @GetMapping("/{id}")
    public TareaDTO tarea(@PathVariable("id") Long id){
        return this.tareaService.obtenerTarea(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable("id") Long id){
        this.tareaService.eliminarTarea(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificarTarea(@RequestBody TareaDTO tarea, @PathVariable("id") Long id){
        this.tareaService.actualizarTarea(tarea, id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/progress/{id}")
    public ResponseEntity<Void> modificarTareaProgress(@PathVariable("id") Long id){
        this.tareaService.actualizarProgress(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/block/{id}")
    public ResponseEntity<Void> modificarTareaBlock(@PathVariable("id") Long id){
        this.tareaService.actualizarBlock(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/completed/{id}")
    public ResponseEntity<Void> modificarTareaCompleted(@PathVariable("id") Long id){
        this.tareaService.actualizarCompleted(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/papelera/{id}")
    public ResponseEntity<Void> modificarTareaPapelera(@PathVariable("id") Long id){
        this.tareaService.actualizarPapelera(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/sprint/{id}")
    public ResponseEntity<Void> modificarTareaSprint(@RequestBody Long idTarea, @PathVariable("id") Long id){
        this.tareaService.asignarSprint(idTarea,id);
        return ResponseEntity.noContent().build();
    }
}
