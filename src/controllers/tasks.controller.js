const getTasks = (req, res) => res.send('Getting tasks');

const getTaskById = (req, res) => res.send('Getting task by Id');

const createTask = (req, res) => res.send('Creating task');

const updateTask = (req, res) => res.send('Updating task');

const deleteTask = (req, res) => res.send('Deleting task');

export { getTasks, getTaskById, createTask, updateTask, deleteTask };