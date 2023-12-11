import { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import TasksCard from "../ui/tasks/TasksCard";

function Tasks() {
  const { tasks, getTasks } = useTasks();
  
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks && tasks.map((task) => <TasksCard task={task} key={task.id} />)}
    </div>
  );
}

export default Tasks;
