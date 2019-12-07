'use strict';

/**
 * @swagger
 *  components:
 *    schemas:
 *      Task:
 *        type: object
 *        required:
 *          - title
 *        properties:
 *          title:
 *            type: string
 *            description: set an objective title for task.
 *          stage:
 *            type: string
 *            description: task stage, such as todo or done.
 *          description:
 *            type: string 
 *            description: describe the complete task with details.
 *          priority:
 *            type: string
 *            description: number representing the priority level (the lower the number the higher the priority).
 *        example:
 *           title: UX Research
 *           stage: backlog
 *           description: Designer team meeting with client
 *           priority: 1
 */

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    stage: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER
  }, {});
  Task.associate = function (models) {
    Task.belongsTo(models.Board, {
      foreignKey: 'boardId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};