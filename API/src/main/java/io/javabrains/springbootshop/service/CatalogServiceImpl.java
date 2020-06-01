package io.javabrains.springbootshop.service;

import io.javabrains.springbootshop.dao.CatalogDAO;
import io.javabrains.springbootshop.model.Catalog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CatalogServiceImpl implements CatalogService {
    private CatalogDAO catalogDAO;

    @Autowired
    public CatalogServiceImpl(@Qualifier("catalogDAOJpaImpl") CatalogDAO theCatalogDAO) {
        catalogDAO = theCatalogDAO;
    }

    @Override
    @Transactional
    public List<Catalog> findAll() {
        return catalogDAO.findAll();
    }

    @Override
    @Transactional
    public Catalog findById(int theId) {
        return catalogDAO.findById(theId);
    }

    @Override
    @Transactional
    public void save(Catalog theEmployee) {
        catalogDAO.save(theEmployee);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        catalogDAO.deleteById(theId);
    }

}
