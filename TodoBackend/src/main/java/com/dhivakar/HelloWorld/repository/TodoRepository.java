package com.dhivakar.HelloWorld.repository;


import com.dhivakar.HelloWorld.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {


}
