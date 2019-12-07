'use strict';
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