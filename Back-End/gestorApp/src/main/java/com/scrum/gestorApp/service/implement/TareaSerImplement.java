package com.scrum.gestorApp.service.implement;

import com.scrum.gestorApp.mapper.TareaMapper;
import com.scrum.gestorApp.persistence.entity.*;
import com.scrum.gestorApp.persistence.entity.utils.NotFoundException;
import com.scrum.gestorApp.persistence.entity.utils.tipoEstado;
import com.scrum.gestorApp.persistence.repository.*;
import com.scrum.gestorApp.service.TareaService;
import com.scrum.gestorApp.service.dto.TareaDTO;
import jakarta.persistence.PostUpdate;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.cglib.core.Local;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TareaSerImplement implements TareaService {

    private final UsuarioRepository usuarioRepository;
    private final SprintRepository sprintRepository;
    private final TareaRepository tareaRepository;
    private final EstadoRepository estadoRepository;
    private final HistoricoRespository historicoRespository;

    @Override
    public void crearTarea(TareaDTO tarea) {

        try{

        //Id del usuario logueado.
        List<EstadoEntity> estadoCreate = this.estadoRepository.findAll();
        TareaEntity tareaEntity = TareaMapper.INSTANCE.toEntity(tarea);
        //Fecha actual
        Date dateActual = new Date();
        tareaEntity.setFechaInicio(dateActual);
        tareaEntity.setSprintTarea(null); //Valor sin settear

        for (EstadoEntity estado : estadoCreate) {
            if (estado.getTipo() == tipoEstado.BACKLOG) {
                tareaEntity.setEstadoTarea(estado);
            }
        }
        this.tareaRepository.save(tareaEntity);

        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }

    }

    //No parse bien la fecha, utilizar LocalDateTime? Hora incorrecta.
    public static Date formatoFecha(final Date date){
        try{
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
            String dateString =  dateFormat.format(date);
            return dateFormat.parse(dateString);
        }catch(ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public void actualizarHistorico(TareaEntity tarea, EstadoEntity estado){

        HistoricoEntity historicoEntity = new HistoricoEntity();

        historicoEntity.setTareaId(tarea.getId());
        historicoEntity.setFecha(new Date());
        historicoEntity.setEstadoAfter(tarea.getEstadoTarea().getId());
        historicoEntity.setEstadoBefore(estado.getId());
        historicoEntity.setTareaNombre(tarea.getTitulo());

        this.historicoRespository.save(historicoEntity);
    }

    @Override
    public List<TareaDTO> listaTareas() {

        ArrayList<TareaDTO> listaTareas = new ArrayList<>();

        List<TareaEntity> lista =  this.tareaRepository.findAll();

        for (int i = 0; i < lista.size(); i++){
            TareaDTO tareaDTO = TareaMapper.INSTANCE.toDTO(lista.get(i));
            listaTareas.add(tareaDTO);
        }
        return listaTareas;
    }

    @Override
    public TareaDTO obtenerTarea(Long id) {
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);
        TareaEntity tareaEntity = tareaOp.get();
        return TareaMapper.INSTANCE.toDTO(tareaEntity);
    }

    @Override
    public void eliminarTarea(Long id) {
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);
        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }

        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(tareaOp.get().getEstadoTarea().getId());
        if (estadoOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el estado");
        }

        List<EstadoEntity> estadoPapelera = this.estadoRepository.findAll();

        for (int i = 0; i < estadoPapelera.size(); i++){
            if (estadoPapelera.get(i).getTipo() == tipoEstado.PAPELERA){
                tareaOp.get().setEstadoTarea(estadoPapelera.get(i));
             }
        }
        //Tabla temporal, que después de un tiempo se puede eliminar.
        this.tareaRepository.save(tareaOp.get());
        //Se agg a la vista Historico
        actualizarHistorico(tareaOp.get(), estadoOp.get());
    }

    @Override
    public void actualizarTarea(TareaDTO tarea, Long id){

        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);
        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }
        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(tareaOp.get().getUsuarioTarea().getId());
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }
            try{
                TareaEntity tareaEntity = TareaMapper.INSTANCE.toEntity(tarea);
                tareaEntity.setFechaInicio(tareaOp.get().getFechaInicio());
                tareaEntity.setEstadoTarea(tareaOp.get().getEstadoTarea());
                tareaEntity.setSprintTarea(tareaOp.get().getSprintTarea());
                tareaEntity.setUsuarioTarea(tareaOp.get().getUsuarioTarea());
                tareaEntity.setId(id);
                this.tareaRepository.save(tareaEntity);
            }catch (Exception ex) {
                System.out.println("Se ha producido un error");
            }
    }

    @Override
    public void actualizarProgress(Long id) {
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);

        List<EstadoEntity> estadoCreate = this.estadoRepository.findAll();

        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }
        if (tareaOp.get().getSprintTarea() == null){
            throw new NotFoundException("No existe el sprint");
        }
//        Optional<SprintEntity> sprintOp = this.sprintRepository.findById(tareaOp.get().getSprintTarea().getId());
//        if (sprintOp.isEmpty()){
//            throw new NotFoundException("No existe el sprint");
//        }

        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(tareaOp.get().getUsuarioTarea().getId());
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }

        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(tareaOp.get().getEstadoTarea().getId());
        if (estadoOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el estado");
        }

        try{
            for (EstadoEntity estado : estadoCreate) {
                if (estado.getTipo() == tipoEstado.PROGRESO) {
                    tareaOp.get().setEstadoTarea(estado);
                }
            }
            tareaOp.get().setId(id);
            this.tareaRepository.save(tareaOp.get());
            actualizarHistorico(tareaOp.get(), estadoOp.get());

        }catch (Exception ex) {
            System.out.println("Se ha producido un error");
        }

    }

    @Override
    public void actualizarBlock(Long id) {

        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);

        List<EstadoEntity> estadoCreate = this.estadoRepository.findAll();

        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }

        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(tareaOp.get().getUsuarioTarea().getId());
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }

        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(tareaOp.get().getEstadoTarea().getId());
        if (estadoOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el estado");
        }

        try{
            for (EstadoEntity estado : estadoCreate) {
                if (estado.getTipo() == tipoEstado.BLOQUEO){
                    tareaOp.get().setEstadoTarea(estado);
                }
            }
            tareaOp.get().setId(id);
            this.tareaRepository.save(tareaOp.get());
            actualizarHistorico(tareaOp.get(), estadoOp.get());

        }catch (Exception ex) {
            System.out.println("Se ha producido un error");
        }
    }

    @Override
    public void actualizarCompleted(Long id) {
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);

        List<EstadoEntity> estadoCreate = this.estadoRepository.findAll();

        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }

        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(tareaOp.get().getUsuarioTarea().getId());
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }

        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(tareaOp.get().getEstadoTarea().getId());
        if (estadoOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el estado");
        }

        try{
            for (EstadoEntity estado : estadoCreate) {
                if (estado.getTipo() == tipoEstado.COMPLETADO){
                    tareaOp.get().setEstadoTarea(estado);
                }
            }
            tareaOp.get().setId(id);
            this.tareaRepository.save(tareaOp.get());
            actualizarHistorico(tareaOp.get(), estadoOp.get());
        }catch (Exception ex) {
            System.out.println("Se ha producido un error");
        }
    }

    @Override
    public void actualizarPapelera(Long id) {
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(id);

        List<EstadoEntity> estadoCreate = this.estadoRepository.findAll();

        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }

        Optional<UsuarioEntity> usuarioOp = this.usuarioRepository.findById(tareaOp.get().getUsuarioTarea().getId());
        if (usuarioOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el usuario");
        }

        Optional<EstadoEntity> estadoOp = this.estadoRepository.findById(tareaOp.get().getEstadoTarea().getId());
        if (estadoOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el estado");
        }

        try{
            for (EstadoEntity estado : estadoCreate) {
                if (estado.getTipo() == tipoEstado.PAPELERA){
                    tareaOp.get().setEstadoTarea(estado);
                }
            }
            tareaOp.get().setId(id);
            this.tareaRepository.save(tareaOp.get());
            actualizarHistorico(tareaOp.get(), estadoOp.get());

        }catch (Exception ex) {
            System.out.println("Se ha producido un error");
        }
    }

    @Override
    public void asignarSprint(Long idTarea, Long id) {
        Optional<SprintEntity> sprintOp = this.sprintRepository.findById(id);
        if (sprintOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado el Sprint");
        }
        Optional<TareaEntity> tareaOp = this.tareaRepository.findById(idTarea);
        if (tareaOp.isEmpty()){
            throw new NotFoundException("No se ha encontrado la Tarea");
        }

        try{
            tareaOp.get().setSprintTarea(sprintOp.get());
            tareaOp.get().setId(idTarea);
            this.tareaRepository.save(tareaOp.get());
        }catch(Exception ex){
            System.out.println("Se ha producido un error");
        }

    }


}
