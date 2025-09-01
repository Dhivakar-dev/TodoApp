<p align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Spring_Boot-F2F4F7%3Fstyle%3Dfor-the-badge%26logo%3Dspring-boot%26logoColor%3D2c3e50" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/PostgreSQL-316192%3Fstyle%3Dfor-the-badge%26logo%3Dpostgresql%26logoColor%3Dwhite" />
</p>

🚀 Todo App Backend
This is a secure and scalable Todo application backend built with Spring Boot. The project provides a set of REST APIs for standard CRUD (Create, Read, Update, Delete) operations on todos, complete with JWT-based authentication and authorization. It leverages Spring Security for robust protection and Spring Data JPA for seamless data persistence with a PostgreSQL database.

✨ Features
Full CRUD functionality: Create, Read, Update, and Delete todos.

JWT-based Authentication: Secure user registration and login endpoints.

Secure REST APIs: All endpoints are protected by Spring Security.

Data Persistence: Uses PostgreSQL as the database with Spring Data JPA.

Scalable Architecture: Designed with modern backend best practices.

🛠️ Technologies Used
Backend: Java 17+, Spring Boot 3.x

Security: Spring Security, JWT

Data: Spring Data JPA, PostgreSQL

Build Tool: Maven

📋 Prerequisites
To run this application, you will need to have the following installed:

Java Development Kit (JDK) 17 or higher

Apache Maven

A running instance of a PostgreSQL database

🏁 Getting Started
Follow these steps to get the application up and running on your local machine.

1. Clone the repository
git clone [https://github.com/Dhivakar-dev/TodoApp.git](https://github.com/Dhivakar-dev/TodoApp.git)
cd TodoApp

2. Configure the Database
Open the src/main/resources/application.properties file and update the database connection properties to match your local PostgreSQL configuration.

spring.application.name=HelloWorld
server.port=8080

# Database connection properties
spring.datasource.url=jdbc:postgresql://localhost:5432/tododb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA and Hibernate properties
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

Note: You must replace your_username and your_password with your actual PostgreSQL credentials.

3. Run the application
You can run the application directly from your IDE or using Maven from the command line.

./mvnw spring-boot:run

The application will start on http://localhost:8080.

🗺️ API Endpoints
The application provides the following REST API endpoints:

Authentication
POST /auth/register: Register a new user.

POST /auth/login: Authenticate a user and receive a JWT.

Todos
GET /api/todos: Get a list of all todos for the authenticated user.

GET /api/todos/{id}: Get a specific todo by ID.

POST /api/todos: Create a new todo.

PUT /api/todos/{id}: Update an existing todo.

DELETE /api/todos/{id}: Delete a todo.

🤝 Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.
