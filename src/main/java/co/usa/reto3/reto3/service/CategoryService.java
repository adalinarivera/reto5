package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Category;
import co.usa.reto3.reto3.repository.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List <Category> getAll(){
        return categoryRepository.getAll();
    }
    public Optional <Category> getCategory(int categoryId){
        return categoryRepository.getCategory(categoryId);
    }
    public Category save (Category catego){
        //verificar si la catogoria es nueva 
        if (catego.getId()==null) {
            return categoryRepository.save(catego);
        } else {
            Optional<Category> consulta=categoryRepository.getCategory (catego.getId());
            if (consulta.isEmpty()) {
                return categoryRepository.save(catego);
                
            } else {
                return catego;
            }
        }
    }
    public Category update(Category catego){
        if(catego.getId()!=null){
            Optional<Category> consulta2=categoryRepository.getCategory(catego.getId());
            if(!consulta2.isEmpty()){
                
                if (catego.getName() !=null){
                    consulta2.get().setName(catego.getName());
                }
                if(catego.getDescription() !=null){
                    consulta2.get().setDescription(catego.getDescription());
                }
                
                return categoryRepository.save(consulta2.get());
                
            }
        }
        return catego;
    }  
    public boolean deleteCategory(int categoryId){
        Boolean d=getCategory(categoryId).map(catego -> {categoryRepository.delete(catego);
            return true;
        }).orElse(false);
        return d;
    }
}
