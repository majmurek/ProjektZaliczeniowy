package io.javabrains.springbootshop.dao;

import io.javabrains.springbootshop.model.Catalog;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class CatalogDAOHibernateImpl implements CatalogDAO {
    private EntityManager entityManager;

    @Autowired
    public CatalogDAOHibernateImpl(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    @Transactional
    public List<Catalog> findAll() {
        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);
        //create a query
        Query<Catalog> theQuery = currentSession.createQuery("from Catalog", Catalog.class);
        //execute query and get result list
        List<Catalog> catalogs = theQuery.getResultList();
        //return a result
        return catalogs;
    }

    @Override
    public Catalog findById(int theId) {
        // get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        Catalog theCatalog = currentSession.get(Catalog.class, theId);
        //return the employee
        return theCatalog;
    }

    @Override
    public void save(Catalog theCatalog) {
        // get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        currentSession.saveOrUpdate(theCatalog);
    }

    @Override
    public void deleteById(int theId) {
        // get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //delete object with primary key
        Query theQuery = currentSession.createQuery("delete from Catalog where id=:catalogId");
        theQuery.setParameter("catalogId", theId);

        theQuery.executeUpdate();

    }

}
