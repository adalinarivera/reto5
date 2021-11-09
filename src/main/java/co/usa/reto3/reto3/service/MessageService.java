package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Message;
import co.usa.reto3.reto3.repository.MessageRepository;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List <Message>getAll(){
        return messageRepository.getAll();
    }
    public Optional<Message>getMessage(int messageId){
        return messageRepository.getMessage(messageId);
    }
    public Message save(Message messa){
        if (messa.getIdMessage() ==null) {
            return messageRepository.save(messa);
            
        } else {
            Optional<Message> consulta=messageRepository.getMessage(messa.getIdMessage());

            if (consulta.isEmpty()) {
                return messageRepository.save(messa);
            } else {
                return messa;
            }
        }
    }
    public Message update(Message messa){
        if(messa.getIdMessage()!=null){
            Optional<Message> consulta2=messageRepository.getMessage(messa.getIdMessage());
            if(!consulta2.isEmpty()){
                
                if(messa.getMessageText()!=null){
                    consulta2.get().setMessageText(messa.getMessageText());
                }
                
                return messageRepository.save(consulta2.get());
                
            }
        }
        return messa;
    }
    public boolean deleteMessage(int messageId) {
        Boolean d = getMessage(messageId).map(messa -> {
            messageRepository.delete(messa);
            return true;
        }).orElse(false);
        return d;
    }
}
