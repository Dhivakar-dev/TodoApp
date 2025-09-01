package com.dhivakar.HelloWorld.controller;


import com.dhivakar.HelloWorld.service.TodoService;
import com.dhivakar.HelloWorld.models.Todo;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
@Slf4j
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/get")
    String getTodo()
    {
       // todoService.printTodos();
        return "Todo";
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Todo Retrieved Successful"),
            @ApiResponse(responseCode = "404", description = "Todo not found!")
    })
    @GetMapping("/{id}")
    ResponseEntity<Todo> getTodoById(@PathVariable long id)
    {
        try{
            Todo createdTodo = todoService.getTodoById(id);
            return new ResponseEntity<>(createdTodo, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            //log.info("ee");
            //log.warn("error");
            //log.error("",e);
        }

    }

    @GetMapping
    ResponseEntity<List<Todo>> getTodos()
    {
        return new ResponseEntity<List<Todo>>(todoService.getTodos(), HttpStatus.OK);
    }


    @GetMapping("/page")
    ResponseEntity<Page<Todo>> getTodosPaged(@RequestParam int page, @RequestParam int size)
    {
        return new ResponseEntity<>(todoService.getAllTodosPages(page,size), HttpStatus.OK);
    }
    {

    }




    @PostMapping("/create")
    ResponseEntity<Todo> createUser(@RequestBody Todo todo)
    {
        return new ResponseEntity<>(todoService.createTodo(todo), HttpStatus.CREATED);

    }

    @PutMapping
    ResponseEntity<Todo> updateTodoById(@RequestBody Todo todo)
    {
        return new ResponseEntity<>(todoService.updateTodo(todo), HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    void deleteTodoById(@PathVariable Long id)
    {
        todoService.deleteTodoById(id);

    }


}
