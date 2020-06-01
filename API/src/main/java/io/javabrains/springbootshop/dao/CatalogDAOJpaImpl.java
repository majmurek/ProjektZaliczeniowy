package io.javabrains.springbootshop.dao;

import io.javabrains.springbootshop.model.Catalog;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

@Repository
public class CatalogDAOJpaImpl implements CatalogDAO {
    
     private EntityManager entityManager;

    public CatalogDAOJpaImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    public List<Catalog> findAll() {
        Query theQuery = entityManager.createQuery("from Catalog");

        List<Catalog> catalogs = theQuery.getResultList();
        return catalogs;
    }

    @Override
    public Catalog findById(int theId) {
        Catalog theCatalog = entityManager.find(Catalog.class, theId);
        return theCatalog;
    }

    @Override
    public void save(Catalog theEmployee) {
        Catalog dbEmployee = entityManager.merge(theEmployee);
        theEmployee.setId(dbEmployee.getId());
    }

    @Override
    public void deleteById(int theId) {
        Query theQuery = entityManager.createQuery("delete from Catalog where id=:catalogId");
        theQuery.setParameter("catalogId",theId );
        theQuery.executeUpdate();

    }
}
