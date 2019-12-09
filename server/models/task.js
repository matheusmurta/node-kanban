'use strict';

/**
 * @swagger
 *  components:
 *    schemas:
 *      Task:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            description: set an objective title for task.
 *          project_stage:
 *            type: interger
 *            description: task stage, such as todo or done.
 *          description:
 *            type: string 
 *            description: describe the complete task with details.
 *        example:
 *           name: UX Research
 *           description: Designer team meeting with client
 *           project_stage: 1
 */

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    project_stage: DataTypes.INTEGER,
    boardId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Board, {
      foreignKey: 'boardId',
      onDelete: 'CASCADE'
    });
  };
  return Task;
};