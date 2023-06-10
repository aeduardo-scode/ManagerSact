package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.dto.EstadoDTO;
import com.scrum.gestorApp.service.dto.HistoricoDTO;
import com.scrum.gestorApp.service.implement.EstadoSerImplement;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/estados")
public class EstadoController {
    private final EstadoSerImplement estadoService;

    @PostMapping("/create")
    public String crearEstado(@RequestBody EstadoDTO estado){
        return estadoService.crearEstado(estado);
    }

    @GetMapping("")
    public List<EstadoDTO> estadoList(){
        return this.estadoService.listaEstados();
    }

    @GetMapping("/{id}")
    public EstadoDTO estado(@PathVariable("id") Long id){
        return this.estadoService.obtenerEstado(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEstado(@PathVariable("id") Long id){
        this.estadoService.eliminarEstado(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificarEstado(@RequestBody EstadoDTO estado, @PathVariable("id") Long id){
        this.estadoService.actualizarEstado(estado, id);
        return ResponseEntity.noContent().build();
    }
}
