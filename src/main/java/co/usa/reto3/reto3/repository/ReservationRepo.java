package co.usa.reto3.reto3.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.model.ContadorClientes;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.repository.crud.ReservationCrudRepo;

@Repository
public class ReservationRepo {
    @Autowired
    private ReservationCrudRepo reservationCrudRepo;
    
    public List<Reservation>getAll(){
        return (List<Reservation>) reservationCrudRepo.findAll();
    }
    public Optional<Reservation>getReservation(int id){
        return reservationCrudRepo.findById(id);
    }
    public Reservation save (Reservation reser){
        return reservationCrudRepo.save(reser);
    }
    public void delete(Reservation reser){
        reservationCrudRepo.delete(reser);
    }
    public List<Reservation>ReservationStatus(String status){
        return reservationCrudRepo.findAllByStatus(status);
    }
    public List<Reservation> ReservationTiempoRepositorio(Date a, Date b){
        return reservationCrudRepo.findAllByStartDateAfterAndStartDateBefore(a, b);
    }
    public List<ContadorClientes> getClientesRepositorio(){
        List<ContadorClientes> res = new ArrayList<>();
        List<Object[]> report= reservationCrudRepo.countTotalReservationByCliente();
        for(int i=0; i<report.size(); i++){
            res.add(new ContadorClientes((Long)report.get(i)[1],(Client)report.get(i)[0]));
        }
        return res;
    }
        

}
