package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.dto.HistoricoDTO;
import com.scrum.gestorApp.service.implement.HistoricoSerImplement;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/historicos")
@AllArgsConstructor
public class HistoricoController {

    private final HistoricoSerImplement historicoService;
    @PostMapping("/create")
    public String crearHistorico(@RequestBody HistoricoDTO historico){
        return historicoService.crearHistorico(historico);
    }

    @GetMapping("")
    public List<HistoricoDTO> historicoList(){
        return this.historicoService.listaHistoricos();
    }

    @GetMapping("/{id}")
    public HistoricoDTO historico(@PathVariable("id") Long id){
        return this.historicoService.obtenerHistorico(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarHistorico(@PathVariable("id") Long id){
        this.historicoService.eliminarHistorico(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificarHistorico(@RequestBody HistoricoDTO historico, @PathVariable("id") Long id){
        this.historicoService.actualizarHistorico(historico, id);
        return ResponseEntity.noContent().build();
    }
}
