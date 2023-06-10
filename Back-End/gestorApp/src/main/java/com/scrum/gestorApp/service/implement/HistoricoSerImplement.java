package com.scrum.gestorApp.service.implement;

import com.scrum.gestorApp.mapper.HistoricoMapper;
import com.scrum.gestorApp.persistence.entity.HistoricoEntity;
import com.scrum.gestorApp.persistence.repository.HistoricoRespository;
import com.scrum.gestorApp.service.HistoricoService;
import com.scrum.gestorApp.service.dto.HistoricoDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class HistoricoSerImplement implements HistoricoService {

    private final HistoricoRespository historicoRespository;
    @Override
    public String crearHistorico(HistoricoDTO historico) {
        HistoricoEntity historicoEntity = HistoricoMapper.INSTANCE.toEntity(historico);
        this.historicoRespository.save(historicoEntity);
        return historico.toString();
    }

    @Override
    public List<HistoricoDTO> listaHistoricos() {
        ArrayList<HistoricoDTO> listaHistorico = new ArrayList<>();

        List<HistoricoEntity> lista =  this.historicoRespository.findAll();

        for (int i = 0; i < lista.size(); i++){
            HistoricoDTO historicoDTO = HistoricoMapper.INSTANCE.toDTO(lista.get(i));
            listaHistorico.add(historicoDTO);
        }

        return listaHistorico;
    }

    @Override
    public HistoricoDTO obtenerHistorico(Long id) {
        Optional<HistoricoEntity> HistoricoOp = this.historicoRespository.findById(id);
        HistoricoEntity historicoEntity = HistoricoOp.get();
        return HistoricoMapper.INSTANCE.toDTO(historicoEntity);
    }

    @Override
    public void eliminarHistorico(Long id) {
        Optional<HistoricoEntity> historicoOp = this.historicoRespository.findById(id);

        if (historicoOp != null){
            this.historicoRespository.deleteById(id);
            return;
        }

    }

    @Override
    public void actualizarHistorico(HistoricoDTO historico, Long id) {
        Optional<HistoricoEntity> historicoOp = this.historicoRespository.findById(id);

        if (historicoOp != null){
            HistoricoEntity historicoEntity = HistoricoMapper.INSTANCE.toEntity(historico);
            historicoEntity.setId(id);
            this.historicoRespository.save(historicoEntity);
        }
    }
}
