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
  static list(req, res) {
    return Board
      .findAll()
      .then(boards => res.status(200).send(boards));
  }
}

export default Boards;