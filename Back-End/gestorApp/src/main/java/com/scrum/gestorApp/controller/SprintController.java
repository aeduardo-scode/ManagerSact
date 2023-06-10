package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.dto.HistoricoDTO;
import com.scrum.gestorApp.service.dto.SprintDTO;
import com.scrum.gestorApp.service.implement.SprintSerImplement;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/sprints")
public class SprintController {

    private final SprintSerImplement sprintService;

    @PostMapping("/create")
    public ResponseEntity crearSprint(@RequestBody SprintDTO sprint){
        sprintService.crearSprint(sprint);
        return ResponseEntity.ok("200");
    }

    @GetMapping("")
    public List<SprintDTO> sprintList(){
        return this.sprintService.listaSprint();
    }

    @GetMapping("/{id}")
    public SprintDTO sprint(@PathVariable("id") Long id){
        return this.sprintService.obtenerSprint(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSprint(@PathVariable("id") Long id){
        this.sprintService.eliminarSprint(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificarSprint(@RequestBody SprintDTO sprint, @PathVariable("id") Long id){
        this.sprintService.actualizarSprint(sprint, id);
        return ResponseEntity.noContent().build();
    }
}
