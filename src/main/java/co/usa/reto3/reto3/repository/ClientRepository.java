package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.repository.crud.ClientCrudRepository;

@Repository
public class ClientRepository {
    @Autowired
    private ClientCrudRepository clientCrudRepository;

    public List<Client> getAll(){
        return (List<Client>) clientCrudRepository.findAll();

    }
    public Optional <Client>getClient(int clientId){
        return clientCrudRepository.findById(clientId);
        
    }
    public Client save(Client client) {
        return clientCrudRepository.save(client);
    }
    public void delete (Client client){
        clientCrudRepository.delete(client);
    }

}
