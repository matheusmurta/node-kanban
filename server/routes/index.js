import Boards from '../controllers/board';
import Tasks from '../controllers/task';

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the kanban API!',
    }));

    
    /**
     * @swagger
     * path:
     *  /boards/:
     *    get:
     *      summary: Get all tasks by boardid
     *      tags: [Boards]
     *      responses:
     *        "200":
     *          description: An array of tasks
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.get('/api/tasks/listbyboard/:boardId', Tasks.listByBoardID);

    
    /**
     * @swagger
     * path:
     *  /boards/:
     *    get:
     *      summary: Get details of especif boardID
     *      tags: [Boards]
     *      responses:
     *        "200":
     *          description: Details of Board
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.get('/api/boards/:boardId', Boards.listByID);


    app.post('/api/boards', Boards.signUp);

     /**
     * @swagger
     * path:
     *  /boards/:
     *    get:
     *      summary: Get all boards
     *      tags: [Boards]
     *      responses:
     *        "200":
     *          description: An array of boards
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.get('/api/boards', Boards.list);

    /**
     * @swagger
     * tags:
     *   name: Kanban App 
     *   description: Tasks / Progress management
     */

    /**
     * @swagger
     * path:
     *  /tasks/:
     *    post:
     *      summary: Create a new task
     *      tags: [Tasks]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Task'
     *      responses:
     *        "200":
     *          description: A task schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.post('/api/boards/:boardId/tasks', Tasks.create);

    /**
     * @swagger
     * path:
     *  /tasks/:
     *    get:
     *      summary: Get all tasks
     *      tags: [Tasks]
     *      responses:
     *        "200":
     *          description: An array of tasks
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.get('/api/tasks', Tasks.list);

    /**
    * @swagger
    * tags:
    *   name: Tasks
    *   description: Tasks management
    */

    /**
     * @swagger
     * path:
     *  /tasks/:
     *    put:
     *      summary: Update task
     *      tags: [Tasks]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Task'
     *      responses:
     *        "200":
     *          description: A task schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.put('/api/tasks/:taskId', Tasks.modify);

    /**
     * @swagger
     * path:
     *  /tasks/:
     *    delete:
     *      summary: Update task
     *      tags: [Tasks]
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Task'
     *      responses:
     *        "200":
     *          description: A task schema
     *          content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/Task'
     */
    app.delete('/api/tasks/:taskId', Tasks.delete);

    // Swagger set up
    const options = {
        swaggerDefinition: {
            openapi: "3.0.0",
            info: {
                title: "Document Express API Kanban APP",
                version: "1.0.0",
                description:
                    "document and Express API",
                license: {
                    name: "MIT",
                    url: "https://choosealicense.com/licenses/mit/"
                },
                contact: {
                    name: "Swagger",
                    url: "https://swagger.io",
                    email: "matheus_mge@hotmail.com"
                }
            },
            servers: [
                {
                    url: "http://localhost:3001"
                }
            ]
        },
        apis: [
            "./server/models/Task.js",
            "./server/routes/index.js",
        ]
    };
    const specs = swaggerJsdoc(options);
    app.use("/docs", swaggerUi.serve);
    app.get(
        "/docs",
        swaggerUi.setup(specs, {
            explorer: true
        })
    );
};