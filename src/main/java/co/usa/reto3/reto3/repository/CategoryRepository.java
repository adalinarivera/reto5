package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Category;
import co.usa.reto3.reto3.repository.crud.CategoryCrudRepositor;

@Repository
public class CategoryRepository {

    @Autowired
    private CategoryCrudRepositor categoryCrudRepositor;

    public List<Category> getAll(){
        return (List<Category>) categoryCrudRepositor.findAll();
    }
    public Optional<Category>getCategory(int id){
        return categoryCrudRepositor.findById(id);
    }
    public Category save(Category catego){
        return categoryCrudRepositor.save(catego);
    }
    public void delete (Category catego){
        categoryCrudRepositor.delete(catego);
    }
}
