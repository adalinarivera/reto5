package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Computer;
import co.usa.reto3.reto3.repository.ComputerRepository;

@Service
public class ComputerService {
    @Autowired
    private ComputerRepository computerRepository;
    
    public List <Computer> getAll(){
        return computerRepository.getAll();

    }
    public Optional <Computer> getComputer(int computerId){
        return computerRepository.getComputer(computerId);
    }
    public Computer save(Computer compu){
        // verificar si el computador es nuevo y de ser asi se guarda
        
        if (compu.getId()==null){
            return computerRepository.save(compu);

        }else{ // si el objeto viene con un Id verificamos si existe o no 
            Optional<Computer> consulta=computerRepository.getComputer( compu.getId());
        
        if (consulta.isEmpty()) {
            return computerRepository.save(compu);
            
        } else {
            return compu; 
        }
    }
    }
    public Computer update(Computer compu){
        if(compu.getId()!=null){
            Optional<Computer> consulta2=computerRepository.getComputer(compu.getId());
            if(!consulta2.isEmpty()){
                
                if(compu.getName()!=null){
                    consulta2.get().setName(compu.getName());
                }
                if(compu.getBrand()!=null){
                    consulta2.get().setBrand(compu.getBrand());
                }
                if(compu.getYear()!=null){
                    consulta2.get().setYear(compu.getYear());
                }
                if(compu.getDescription()!=null){
                    consulta2.get().setDescription(compu.getDescription());
                }
                if(compu.getCategory()!=null){
                    consulta2.get().setCategory(compu.getCategory());
                }
                
                return computerRepository.save(consulta2.get());
                
            }
        }
        return compu;
    }
    public boolean deleteComputer(int computerId) {
        Boolean d = getComputer(computerId).map(compu -> {computerRepository.delete(compu);
            return true;
        }).orElse(false);
        return d;
    }

}
