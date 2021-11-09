package co.usa.reto3.reto3.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.ContadorClientes;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.model.StatusReservas;
import co.usa.reto3.reto3.repository.ReservationRepo;

@Service
/**
* clase reservation service
*/
public class Reservationservice {
    /**
    * creacion autowired
    */
    @Autowired
    private ReservationRepo reservationRepo;
    /**
    * get all
    */
    public List<Reservation>getAll(){
        return reservationRepo.getAll();
    }
    /**
    * get reservation
    */
    public Optional<Reservation> getReservation (int id){
        return reservationRepo.getReservation(id);
    }
    /**
    * para guardar
    */
    public Reservation save (Reservation reser){
        /**
        * condicional
        */
        if (reser.getIdReservation()==null) {
            return reservationRepo.save(reser);
        } else {
            /**
            * iteracion
            */
            Optional<Reservation> consulta=reservationRepo.getReservation(reser.getIdReservation());
            if (consulta.isEmpty()) {
                return reservationRepo.save(reser);
            } else {
                return reser;
            }
        }
    }
    /**
    * para actualizar
    */
    public Reservation update(Reservation reser){
        if(reser.getIdReservation()!=null){
            /**
            * consulta reservacion
            */
            Optional<Reservation> consulta2=reservationRepo.getReservation(reser.getIdReservation());
            if(!consulta2.isEmpty()){
                /**
                * para empezar la fecha
                */                
                if(reser.getStartDate()!=null){
                    consulta2.get().setStartDate(reser.getStartDate());
                }
                /**
                * para guardar la fecha
                */ 
                if(reser.getDevolutionDate()!=null){
                    consulta2.get().setDevolutionDate(reser.getDevolutionDate());
                }
                /**
                * para empezar el status
                */ 
                if(reser.getStatus()!=null){
                    consulta2.get().setStatus(reser.getStatus());
                }
                /**
                * para devolver la fncion
                */ 
                return reservationRepo.save(consulta2.get());
                
            }
        }
        return reser;
    }
    /**
    * para borrar
    */
    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reser -> {
            reservationRepo.delete(reser);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    /**
    * Lista contador client
    */
    public List<ContadorClientes> reporteClientesServicio(){
        return reservationRepo.getClientesRepositorio();
    }
    /**
    * Lista status
    */
    public StatusReservas reporteStatusServicio (){
        /**
        * lista cancelado y completado
        */
        List<Reservation>completed= reservationRepo.ReservationStatus("completed");
        List<Reservation>cancelled= reservationRepo.ReservationStatus("cancelled");
        /**
        * para retornar la funcion
        */
        return new StatusReservas(completed.size(), cancelled.size() );
    }
    /**
    * Lista reservation
    */
    public List<Reservation> reporteTiempoServicio (String datoA, String datoB){
        /**
        * formato fecha
        */
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        /**
        * para crear fecha
        */
        Date datoUno = new Date();
        Date datoDos = new Date();
        /**
        * parseo de datos
        */
        try{
             datoUno = parser.parse(datoA);
             datoDos = parser.parse(datoB);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(datoUno.before(datoDos)){
            return reservationRepo.ReservationTiempoRepositorio(datoUno, datoDos);
        }else{
            return new ArrayList<>();
        } 
    }
}

    