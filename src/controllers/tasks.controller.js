import pool from "../db.js";

const getTasks = async (req, res) => {
  console.log(req.userId);
  const result = await pool.query("SELECT * FROM tasks WHERE user_id = $1", [
    req.userId,
  ]);
  return res.json(result.rows);
};

const getTaskById = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "The task does not exist.",
    });
  }
  return res.json(result.rows[0]);
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );
    res.json(result.rows[0]);
    console.log(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Already exists a task with that title",
      });
    }
    console.log(error);
    next(error);
  }
};

const updateTask = async (req, res, task) => {
  const { title, description } = req.body;
  const id = req.params.id;
  const result = await pool.query(
    "UPDATE tasks SET title = $2, description = $3 WHERE id = $1 RETURNING *",
    [id, title, description]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "The task does not exist.",
    });
  }
  return res.json(result.rowCount[0]);
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "The task does not exist.",
    });
  }
  return res.sendStatus(204);
};

export { getTasks, getTaskById, createTask, updateTask, deleteTask };
