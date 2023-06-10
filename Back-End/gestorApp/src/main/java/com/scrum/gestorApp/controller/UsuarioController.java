package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.dto.UsuarioDTO;
import com.scrum.gestorApp.service.implement.UsuarioSerImplement;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
public class UsuarioController {

    private final UsuarioSerImplement usuarioService;
//    @Autowired
//    private PasswordEncoder passwordEncoder;

//    @PostMapping("/register")
//    public ResponseEntity<Object> crearUsuario(@Valid @RequestBody UsuarioDTO usuario){
//        //Encriptar la contraseña
////        if (usuario.getClave() != ""){
////            String Encrip = passwordEncoder.encode(usuario.getClave());
////            usuario.setClave(Encrip);
////        }
//        return ResponseEntity.ok(usuarioService.crearUsuario(usuario));
//    }

    @GetMapping("")
    public List<UsuarioDTO> usuariosList(){
        return this.usuarioService.listaUsuarios();
    }

    @GetMapping("/{id}")
    public UsuarioDTO usuario(@PathVariable("id") Long id){
        return this.usuarioService.obtenerUsuario(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable("id") Long id){

        this.usuarioService.eliminarUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificarUsuario(@RequestBody UsuarioDTO usuario, @PathVariable("id") Long id){
        this.usuarioService.actualizarUsuario(usuario, id);
        return ResponseEntity.noContent().build();
    }
}
