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
 *            description: set an objective name for Board.
 *        example:
 *           name: Board UX Team
 */

module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING
  }, {});
  Board.associate = function(models) {
    Board.hasMany(models.Task, {
      foreignKey: 'boardId',
    });
  };
  return Board;
};