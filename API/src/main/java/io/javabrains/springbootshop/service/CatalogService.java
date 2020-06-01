package io.javabrains.springbootshop.service;

import io.javabrains.springbootshop.model.Catalog;

import java.util.List;

public interface CatalogService {
    
    public List<Catalog> findAll();
    
    public Catalog findById(int theId);
    
    public void save(Catalog theEmployee);
    
    public void deleteById(int theId);
}
