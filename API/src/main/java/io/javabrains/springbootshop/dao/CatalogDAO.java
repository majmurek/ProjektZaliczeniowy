package io.javabrains.springbootshop.dao;

import io.javabrains.springbootshop.model.Catalog;

import java.util.List;

public interface CatalogDAO {
    public List<Catalog> findAll();

    public Catalog findById(int theId);

    public void save(Catalog theCatalog);

    public void deleteById(int theId);
}
