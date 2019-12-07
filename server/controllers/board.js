import model from '../models';

const { Board } = model;

class Boards {
  static signUp(req, res) {
    const { name } = req.body
    return Board
      .create({
        name
      })
      .then(boardData => res.status(201).send({
        success: true,
        message: 'Board successfully created',
        boardData
      }))
  }
}

export default Boards;