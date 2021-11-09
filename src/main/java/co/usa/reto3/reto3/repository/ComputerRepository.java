package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Computer;
import co.usa.reto3.reto3.repository.crud.ComputerCrudRepository;

@Repository
public class ComputerRepository {

    @Autowired
    private ComputerCrudRepository computerCrudRepository;
    
public List <Computer> getAll(){
        return (List <Computer>) computerCrudRepository.findAll();

    }
    public Optional<Computer> getComputer(int id){
        return computerCrudRepository.findById(id);

    }
    public Computer save(Computer compu){
        return computerCrudRepository.save(compu);
    }
    public void delete (Computer compu){
        computerCrudRepository.delete(compu);
    }
}   
