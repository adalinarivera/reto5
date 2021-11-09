package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.repository.ClientRepository;



@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client>getAll(){
        return clientRepository.getAll();
    }

    public Optional<Client>getClient(int clientId){
        return clientRepository.getClient(clientId);
    }
    public Client save (Client client){
        if (client.getIdClient()==null) {
            return clientRepository.save(client);
            
        } else {
            Optional<Client> consulta=clientRepository.getClient(client.getIdClient());
            if (consulta.isEmpty()) {
                return clientRepository.save(client);
                
            } else {
                return client;
                
            }
        }
    }
    public Client update(Client client){
        if(client.getIdClient()!=null){
            Optional<Client> consulta2=clientRepository.getClient(client.getIdClient());
            if(!consulta2.isEmpty()){
                
                if (client.getEmail() !=null){
                    consulta2.get().setEmail(client.getEmail());
                }
                if (client.getPassword() !=null){
                    consulta2.get().setPassword(client.getPassword());
                }
                if (client.getName() !=null){
                    consulta2.get().setName(client.getName());
                }
                if(client.getAge() !=null){
                    consulta2.get().setAge(client.getAge());
                }
                
                return clientRepository.save(consulta2.get());
                
            }
        }
        return client;
    }
    public boolean deleteClient(int clientId){
        Boolean d=getClient(clientId).map(client -> {clientRepository.delete(client);
            return true;
        }).orElse(false);
        return d;
    }

}
