import { createContext, useContext, useState } from "react";
import { getTasksRequest, createTaskRequest, deleteTaskRequest } from "../api/tasks.api";

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

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([...tasks, task]);
      return res.data
    } catch (error) {
      if (error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  }

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if(res.status === 204) {
        setTasks(tasks.filter(task => task.id !== id));
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        deleteTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
