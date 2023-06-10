package com.scrum.gestorApp.service.implement;

import com.scrum.gestorApp.mapper.TareaMapper;
import com.scrum.gestorApp.mapper.UsuarioMapper;
import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.persistence.entity.UsuarioEntity;
import com.scrum.gestorApp.persistence.entity.utils.NotFoundException;
import com.scrum.gestorApp.persistence.repository.TareaRepository;
import com.scrum.gestorApp.persistence.repository.UsuarioRepository;
import com.scrum.gestorApp.service.UsuarioService;
import com.scrum.gestorApp.service.dto.UsuarioDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UsuarioSerImplement implements UsuarioService {

    private final UsuarioRepository usuarioRepository;

    private final TareaRepository tareaRepository;

    @Override
    public String crearUsuario(UsuarioDTO usuario) {
        ArrayList<TareaEntity> listaTareas = new ArrayList<>();
        UsuarioEntity usuarioEntity = UsuarioMapper.INSTANCE.toEntity(usuario, listaTareas);
        this.usuarioRepository.save(usuarioEntity);
        return usuario.toString();
    }

    @Override
    public List<UsuarioDTO> listaUsuarios() {

        ArrayList<UsuarioDTO> listaUsuarios = new ArrayList<>();

        List<UsuarioEntity> lista =  this.usuarioRepository.findAll();

        for (int i = 0; i < lista.size(); i++){
            UsuarioDTO usuarioDTO = UsuarioMapper.INSTANCE.toDTO(lista.get(i));
            listaUsuarios.add(usuarioDTO);
        }

        return listaUsuarios;
    }

    @Override
    public UsuarioDTO obtenerUsuario(Long id) {
        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(id);
        UsuarioEntity usuarioEntity = usuarioOp.get();
        return UsuarioMapper.INSTANCE.toDTO(usuarioEntity);
    }

    @Override
    public void eliminarUsuario(Long id){
        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(id);

        if (usuarioOp.isPresent()){
            if (!usuarioOp.get().getListTarea().isEmpty()){
                for (int i = 0; i < usuarioOp.get().getListTarea().size(); i++){
                    Optional<TareaEntity> tarea = this.tareaRepository.findById(usuarioOp.get().getListTarea().get(i).getId());
                    tarea.get().setUsuarioTarea(null); //Solo puede pasarse un objeto de tipo Usuario
                }
            }
            this.usuarioRepository.deleteById(id);
            return;
        }

    }

    @Override
    public void actualizarUsuario(UsuarioDTO usuarioDTO, Long id) {
        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(id);
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }
//        Creamos un array vacio - para almacenar las tareas del usuario en una nueva lista y pasarsela.
        ArrayList<TareaEntity> listaTareas = new ArrayList<>();
        System.out.println();

        if (!usuarioOp.get().getListTarea().isEmpty()){

            for (int i = 0; i < usuarioOp.get().getListTarea().size(); i++){
                Optional<TareaEntity> tareaOp = this.tareaRepository.findById(usuarioOp.get().getListTarea().get(i).getId());
                if (tareaOp.isEmpty()){
                    throw new NotFoundException("No se ha encontrado ninguna tarea");
                }
                listaTareas.add(tareaOp.get());
            }
        }
        try{
            UsuarioEntity usuario = UsuarioMapper.INSTANCE.toEntity(usuarioDTO, listaTareas);
            usuario.setId(id);
            this.usuarioRepository.save(usuario);
        }catch(Exception ex){
            System.out.println("Se ha producido un error");
        }


    }
}
