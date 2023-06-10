package com.scrum.gestorApp.controller;

import com.scrum.gestorApp.service.dto.CredencialDTO;
import com.scrum.gestorApp.service.dto.UsuarioDTO;
import com.scrum.gestorApp.service.implement.UsuarioSerImplement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

//    private final UsuarioSerImplement usuarioService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<String> authenticateUsuario(@Valid @RequestBody CredencialDTO credencial) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(credencial.getUsuario(), credencial.getClave())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return ResponseEntity.ok("Ha iniciado sesión!");
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }
    }

//    @PostMapping("/register")
//    public ResponseEntity<Object> crearUsuario(@Valid @RequestBody UsuarioDTO usuario){
//        //Encriptar la contraseña
////        if (usuario.getClave() != ""){
////            String Encrip = passwordEncoder.encode(usuario.getClave());
////            usuario.setClave(Encrip);
////        }
//        return ResponseEntity.ok(usuarioService.crearUsuario(usuario));
//    }
}
