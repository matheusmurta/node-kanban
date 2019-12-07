import Boards from '../controllers/board';
import Tasks from '../controllers/task';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the kanban API!',
    }));

    app.post('/api/boards', Boards.signUp);
    app.post('/api/boards/:boardId/tasks', Tasks.create);
    app.get('/api/tasks', Tasks.list);
    app.put('/api/tasks/:taskId', Tasks.modify);
    app.delete('/api/tasks/:taskId', Tasks.delete);
};