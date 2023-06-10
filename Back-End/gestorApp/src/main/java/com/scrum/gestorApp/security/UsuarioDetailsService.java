package com.scrum.gestorApp.security;

import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import com.scrum.gestorApp.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioDetailsService implements UserDetailsService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
        UsuarioEntity user = usuarioRepository.findOneByUsuario(usuario)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario inexistente: "+usuario));

        return new UsuarioDetails(user);
    }
}
