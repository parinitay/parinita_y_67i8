package com.pari.ecommerce.service;

import com.pari.ecommerce.model.Order;
import com.pari.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Place a new order
    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }

    // View all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // View order by ID
    public Order getOrderById(String id) {
        return orderRepository.findById(id).orElse(null);
    }
}
