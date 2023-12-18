import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from "../api/tasks.api";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context) {
    return context;
  } else {
    throw new Error("useTasks must be used within an TasksProvider");
  }
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      setErrors([error.response.data.message]);
      console.error(error.message);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([...tasks, task]);
      return res.data;
    } catch (error) {
      if (error.response.data.message) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      if (res) {
        return res;
      }
    } catch (error) {
      setErrors([error.response.data.message]);
      console.error(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) {
        setTasks(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      setErrors([error.response.data.message]);
      console.error(error.message);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        errors,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
