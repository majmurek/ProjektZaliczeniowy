package io.javabrains.springbootshop.service;

import io.javabrains.springbootshop.model.User;

public interface UserService {
    
    public User findUserByEmail(String email);
    
    public void saveUser(User user);
}
