package com.scrum.gestorApp.security.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scrum.gestorApp.security.TokenUtils;
import com.scrum.gestorApp.security.UsuarioDetails;
import com.scrum.gestorApp.service.dto.CredencialDTO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Collections;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        CredencialDTO credenciales = new CredencialDTO();
        try {
            credenciales = new ObjectMapper().readValue(request.getReader(), CredencialDTO.class);
        }catch(IOException e){

        }
        UsernamePasswordAuthenticationToken userPAT = new UsernamePasswordAuthenticationToken(
                credenciales.getUsuario(),
                credenciales.getClave(),
                Collections.emptyList()
        );

        return getAuthenticationManager().authenticate(userPAT);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {


        UsuarioDetails usuarioDetails = (UsuarioDetails) authResult.getPrincipal();

        String token = TokenUtils.createToken(usuarioDetails.getUsername(), usuarioDetails.getNombre());
        //        Se agrega a la cabecera HTTP
        response.addHeader("Authorization", "Bearer "+token);
        response.getWriter().flush();

        super.successfulAuthentication(request, response, chain, authResult);
    }

}
