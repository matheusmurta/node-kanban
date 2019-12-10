RESTful Simple API Kanban App with Express, PostgreSQL, Sequelize Node, Docker and Heroku.

### Requeriments
This application required, Node.js and PostgreSQL.

### Clone this repository
git clone https://github.com/matheusmurta/node-kanban.git

### 1 - Create postgres database with command or create using PgAdmin 
createdb kanban

### Please please set according to your password and database user !
node-kanban\server\config\config.json

```
"development": {
    "username": "postgres",
    "password": "123456",
    "database": "kanban",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
```

### 2 - Run in project folder 
```sh
npm install
sequelize db:migrate
npm start 
```
### 3 - you can check there quickly if it works by going to http://localhost:3001/ and seeing this message
```sh
{"message":"Kanban App"}
```

### 4 - After run project locally you can check the Docs Api by Generate by Swagger Documentation
http://localhost:3001/docs/

### 5 Now Setup/Run the Front End App
https://github.com/matheusmurta/react-kanban


### Notes : 
Some features are not yet available, check issues yet

### Mini Guia da api

## Boards
```
GET http://127.0.0.1:3001/api/boards
Lista todos dos boards 

POST 
http://127.0.0.1:3000/api/boards
{
  "name": "Meu primeiro Board"
}

LISTAR TODAS http://127.0.0.1:3000/api/boards
LISTAR TODAS BASEADA NA listbyboard http://127.0.0.1:3001/api/tasks/listbyboard/1
```
## Tasks 
```
LISTAR TODAS http://127.0.0.1:3001/api/tasks/ 
LISTAR TODAS Por BoardID http://127.0.0.1:3001/api/tasks/listbyboard/{BoardID}

DELETAR http://127.0.0.1:3000/api/tasks/{taskID}
ATUALIZAR http://127.0.0.1:3000/api/tasks/{taskID}
{
  "name": "Protipagem",
  "description": "Prototipo de baixa fidelidade.",
  "project_stage": 1
 }
 
INSERIR http://127.0.0.1:3000/api/boards/1/tasks
 {
  "name": "Protipagem",
  "description": "Prototipo de baixa fidelidade.",
  "project_stage": 1
 }
```

 




