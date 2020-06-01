package io.javabrains.springbootshop.controller;

import io.javabrains.springbootshop.model.Catalog;
import io.javabrains.springbootshop.service.CatalogService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CatalogController {
    private CatalogService catalogService;

    // inject employee dao
    @Autowired
    public CatalogController(CatalogService theCatalogService) {
        catalogService = theCatalogService;
    }

    //expose /employee
    @GetMapping("/catalog")
    public List<Catalog> findAll(@RequestParam(value = "searchfor", required=false) String searchfor) {

        List<Catalog> allCatalogs = catalogService.findAll();

        List<Catalog> catalogs = new ArrayList<>();

        if (searchfor != null) {
            for (Catalog catalog : allCatalogs) {
                String title = catalog.getTitle().toLowerCase();
                String searchingText = searchfor.toLowerCase();
                if (title.contains(searchingText)) {
                    catalogs.add(catalog);
                }
            }
            return catalogs;
        } else {
            return allCatalogs;
        }
        
    }
    
}
