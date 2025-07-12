package com.pari.ecommerce.repository;

import com.pari.ecommerce.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    // Add custom queries if needed
}
