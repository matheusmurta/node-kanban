RESTful Simple API Kanban App with Express, PostgreSQL, Sequelize Node, Docker and Heroku.

### Requeriments
This application required, Node.js and PostgreSQL.

### 1 - Create postgres database with command or create using PgAdmin 
createdb kanban

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

### 5 Now just Run the Front End App
https://github.com/matheusmurta/react-kanban

### Or use Quick postman Docs
https://documenter.getpostman.com/view/5066472/SWE57ywE?version=latest#36093d14-bbd8-403c-b23f-5eed0f8548e1

### Notes : 
these features are not yet available, check issues yet

### Mini Guia da api

## Boards
```
http://127.0.0.1:3000/api/boards/1/tasks
LISTAR TODAS http://127.0.0.1:3000/api/boards
LISTAR TODAS BASEADA NA listbyboard http://127.0.0.1:3001/api/tasks/listbyboard/1
```
## Tasks 
```
LISTAR TODAS http://127.0.0.1:3001/api/tasks/
DELETAR http://127.0.0.1:3000/api/tasks/6
ATULIZAR http://127.0.0.1:3000/api/tasks/6
INSERIR http://127.0.0.1:3000/api/boards/1/tasks
```





