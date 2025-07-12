package com.pari.ecommerce.service;

import com.pari.ecommerce.model.Product;
import com.pari.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Create or update a product
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get a product by ID
    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    // Delete a product by ID
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}
