# 🚀 Todo App Backend (Spring Boot Project)  

This is a **Spring Boot project** that implements a secure and scalable **Todo application backend**.  
It provides **REST APIs** for CRUD (Create, Read, Update, Delete) operations on todos, with **JWT-based authentication and authorization**.  
The project uses **Spring Security** for protection and **Spring Data JPA** with **PostgreSQL** for persistence.  

---

## 📋 Table of Contents  
- [✨ Features](#-features)  
- [🛠️ Technologies Used](#️-technologies-used)  
- [📋 Prerequisites](#-prerequisites)  
- [🏁 Getting Started](#-getting-started)  
- [🗺️ API Endpoints](#️-api-endpoints)  
- [🤝 Contributing](#-contributing)  

---

## ✨ Features  
- ✅ Full CRUD functionality: Create, Read, Update, and Delete todos  
- 🔑 JWT-based Authentication: Secure user registration and login  
- 🛡️ Secure REST APIs: Endpoints protected by Spring Security  
- 💾 Data Persistence: PostgreSQL database with Spring Data JPA  
- 📐 Scalable Architecture: Follows modern Spring Boot best practices  

---

## 🛠️ Technologies Used  
- **Framework:** Spring Boot 3.x (Java 17+)  
- **Security:** Spring Security, JWT  
- **Database:** PostgreSQL, Spring Data JPA  
- **Build Tool:** Maven  

---

## 📋 Prerequisites  
To run this project, you need:  
- Java Development Kit (JDK) 17 or higher  
- Apache Maven  
- PostgreSQL installed and running  

---

## 🏁 Getting Started  

### 1. Clone the Repository  
```bash
git clone https://github.com/Dhivakar-dev/TodoApp.git
cd TodoApp
```
### 2. Create PostgreSQL Database
```bash
CREATE DATABASE tododb;
```

### 3. Configure Database in application.properties
```bash

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

```



👉 Replace your_username and your_password with your PostgreSQL credentials.

### 4. Run the Project

Run with Maven:
```bash
./mvnw spring-boot:run
```

The server will start at: http://localhost:8080

🗺️ API Endpoints
🔑 Authentication

POST /auth/register → Register a new user

POST /auth/login → Authenticate user & receive JWT

📋 Todos (JWT required)

GET /api/todos → Get all todos for the authenticated user

GET /api/todos/{id} → Get a specific todo by ID

POST /api/todos → Create a new todo

PUT /api/todos/{id} → Update an existing todo

DELETE /api/todos/{id} → Delete a todo

🤝 Contributing

Contributions are welcome! 🎉
If you find bugs or have suggestions, feel free to open an issue or submit a pull request.




