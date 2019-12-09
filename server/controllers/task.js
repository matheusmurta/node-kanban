import model from '../models';

const { Task } = model;

class Tasks {
  static create(req, res) {
    const { name, description, project_stage } = req.body
    const { boardId } = req.params
    return Task
      .create({
        name,
        description,
        project_stage,
        boardId
      })
      .then(task => res.status(201).send({
        message: `Your Task with the name ${name} has been created successfully `,
        task
      }))
  }
  static list(req, res) {
    return Task
      .findAll()
      .then(tasks => res.status(200).send(tasks));
  }
  static listByBoardID(req, res) {
    const { boardId } = req.params
    return Task
      .findAll({
        where: {
          boardId: boardId
        }
      })
      .then(tasks => res.status(200).send(tasks));
  }
  static modify(req, res) {
    const { name, description, project_stage } = req.body
    return Task
      .findByPk(req.params.taskId)
      .then((task) => {
        task.update({
          name: name || task.name,
          description: description || task.description,
          project_stage: project_stage || task.project_stage
        })
          .then((updatedTask) => {
            res.status(200).send({
              message: 'Task updated successfully',
              data: {
                name: name || updatedTask.name,
                description: description || updatedTask.description,
                project_stage: project_stage || updatedTask.project_stage
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

