package com.dhivakar.HelloWorld.service;

import com.dhivakar.HelloWorld.models.User;
import com.dhivakar.HelloWorld.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user)
    {
        return userRepository.save(user);
    }

    public User getUserById(Long id)
    {
        return userRepository.findById(id).orElseThrow(()->new RuntimeException("User not found"));
    }
}
