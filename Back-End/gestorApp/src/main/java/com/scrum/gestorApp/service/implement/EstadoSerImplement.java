package com.scrum.gestorApp.service.implement;

import com.scrum.gestorApp.mapper.EstadoMapper;
import com.scrum.gestorApp.mapper.HistoricoMapper;
import com.scrum.gestorApp.persistence.entity.EstadoEntity;
import com.scrum.gestorApp.persistence.entity.HistoricoEntity;
import com.scrum.gestorApp.persistence.entity.TareaEntity;
import com.scrum.gestorApp.persistence.repository.EstadoRepository;
import com.scrum.gestorApp.persistence.repository.UsuarioRepository;
import com.scrum.gestorApp.service.EstadoService;
import com.scrum.gestorApp.service.dto.EstadoDTO;
import com.scrum.gestorApp.service.dto.HistoricoDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EstadoSerImplement implements EstadoService {

    private final EstadoRepository estadoRepository;
    @Override
    public String crearEstado(EstadoDTO estado) {
        ArrayList<TareaEntity> listaTareas = new ArrayList<>();
        EstadoEntity estadoEntity = EstadoMapper.INSTANCE.toEntity(estado,listaTareas);
        this.estadoRepository.save(estadoEntity);
        return estado.toString();
    }

    @Override
    public List<EstadoDTO> listaEstados() {
        ArrayList<EstadoDTO> listaEstado = new ArrayList<>();

        List<EstadoEntity> lista =  this.estadoRepository.findAll();

        for (int i = 0; i < lista.size(); i++){
            EstadoDTO estadoDTO = EstadoMapper.INSTANCE.toDTO(lista.get(i));
            listaEstado.add(estadoDTO);
        }

        return listaEstado;
    }

    @Override
    public EstadoDTO obtenerEstado(Long id) {
        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(id);
        EstadoEntity estadoEntity = estadoOp.get();
        return EstadoMapper.INSTANCE.toDTO(estadoEntity);
    }

    @Override
    public void eliminarEstado(Long id) {
        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(id);

        if (estadoOp != null){
            this.estadoRepository.deleteById(id);
            return;
        }
    }

    @Override
    public void actualizarEstado(EstadoDTO estado, Long id) {
        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(id);

        ArrayList<TareaEntity> listaTareas = new ArrayList<>();
        if (estadoOp != null){
            EstadoEntity estadoEntity = EstadoMapper.INSTANCE.toEntity(estado,listaTareas);
            estadoEntity.setId(id);
            this.estadoRepository.save(estadoEntity);
        }
    }
}
