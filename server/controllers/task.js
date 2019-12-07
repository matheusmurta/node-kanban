import model from '../models';

const { Task } = model;

class Tasks {
  static create(req, res) {
    const { title, stage, description, priority } = req.body
    const { boardId } = req.params
    return Task
      .create({
        title,
        stage,
        description,
        priority,
        boardId
      })
      .then(task => res.status(201).send({
        message: `Your Task with the title ${title} has been created successfully `,
        task
      }))
  }
  static list(req, res) {
    return Task
      .findAll()
      .then(tasks => res.status(200).send(tasks));
  }
  static modify(req, res) {
    const { title, stage, description, priority } = req.body
    return Task
      .findByPk(req.params.taskId)
      .then((task) => {
        task.update({
          title: title || task.title,
          stage: stage || task.stage,
          description: description || task.description,
          priority: priority || task.priority
        })
          .then((updatedTask) => {
            res.status(200).send({
              message: 'Task updated successfully',
              data: {
                title: title || updatedTask.title,
                stage: stage || updatedTask.stage,
                description: description || updatedTask.description,
                priority: priority || updatedTask.priority
              }
            })
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static delete(req, res) {
    return Task
      .findByPk(req.params.taskId)
      .then(task => {
        if (!task) {
          return res.status(400).send({
            message: 'Task Not Found',
          });
        }
        return task
          .destroy()
          .then(() => res.status(200).send({
            message: 'Task successfully deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  }
}

export default Tasks

