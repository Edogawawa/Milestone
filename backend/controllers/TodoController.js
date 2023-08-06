import Todo from "../models/TodoModel.js";

export const getTodos = async (req, res) => {
  try {
    const response = await Todo.findAll();

    res.status(200).json(response);
  } catch (error) {
    console.log(error.massage);
  }
};

export const getTodoById = async (req, res) => {
  try {
    const response = await Todo.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.massage);
  }
};
export const createTodo = async (req, res) => {
  try {
    const response = await Todo.create({
      taskName: req.body.taskName,
      checked: req.body.checked,
      category: req.body.category,
      date: req.body.date,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.massage);
  }
};

export const updateTodoById = async (req, res) => {
  try {
    const response = await Todo.update(
      { taskName: req.body.taskName,
        checked: req.body.checked,
        category: req.body.category,
        date: req.body.date, },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.massage);
  }
};
export const deleteTodoById = async (req, res) => {
  try {
    const response = await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.massage);
  }
};
