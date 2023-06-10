package com.scrum.gestorApp.service.implement;

import com.scrum.gestorApp.mapper.SprintMapper;
import com.scrum.gestorApp.persistence.entity.SprintEntity;
import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.persistence.entity.utils.NotFoundException;
import com.scrum.gestorApp.persistence.repository.SprintRepository;
import com.scrum.gestorApp.persistence.repository.TareaRepository;
import com.scrum.gestorApp.service.SprintService;
import com.scrum.gestorApp.service.dto.SprintDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SprintSerImplement implements SprintService {

    private final SprintRepository sprintRepository;

    private final TareaRepository tareaRepository;
    @Override
    public void crearSprint(SprintDTO sprint) {
        try {

            ArrayList<TareaEntity> listaTareas = new ArrayList<>();
            Date date = new Date();
            sprint.setTimeInicio(date); //Se modifica
            SprintEntity sprintEntity = SprintMapper.INSTANCE.toEntity(sprint);
            this.sprintRepository.save(sprintEntity);

        }catch(Exception e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @Override
    public List<SprintDTO> listaSprint() {
        ArrayList<SprintDTO> listaSprints = new ArrayList<>();

        List<SprintEntity> lista =  this.sprintRepository.findAll();

        for (int i = 0; i < lista.size(); i++){
            SprintDTO sprintDTO = SprintMapper.INSTANCE.toDTO(lista.get(i));
            listaSprints.add(sprintDTO);
        }

        return listaSprints;
    }

    @Override
    public SprintDTO obtenerSprint(Long id) {
        Optional<SprintEntity> sprintOp = this.sprintRepository.findById(id);
        SprintEntity sprintEntity = sprintOp.get();
        return SprintMapper.INSTANCE.toDTO(sprintEntity);
    }

    @Override
    public void eliminarSprint(Long id) {
        Optional<SprintEntity> sprintOp = this.sprintRepository.findById(id);

        if (sprintOp != null){
            this.sprintRepository.deleteById(id);
            return;
        }
    }

    @Override
    public void actualizarSprint(SprintDTO sprint, Long id) {
        Optional<SprintEntity> sprintOp = this.sprintRepository.findById(id);
        if (sprintOp.isPresent()){
            throw new NotFoundException("No se ha encontrado el sprint");
        }

//        ArrayList<TareaEntity> listaTareas = new ArrayList<>();

//        if (!sprintOp.get().getTareaSprint().isEmpty()){
//            for (int i = 0; i < sprintOp.get().getTareaSprint().size(); i++){
//                Optional<TareaEntity> tareaOp = this.tareaRepository.findById(sprintOp.get().getTareaSprint().get(i).getId());
//                if (tareaOp.isEmpty()){
//                    throw new NotFoundException("No se ha encontrado ninguna tarea");
//                }
//                listaTareas.add(tareaOp.get());
//            }
//        }

            SprintEntity sprintEntity = SprintMapper.INSTANCE.toEntity(sprint);
            sprintEntity.setId(id);
            this.sprintRepository.save(sprintEntity);

    }
}
