import { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import TasksCard from "../ui/tasks/TasksCard";

function Tasks() {
  const { tasks, getTasks } = useTasks();
  
  useEffect(() => {
    getTasks();
  }, []);

  if(tasks.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <p className="text-2xl font-bold text-slate-300">
          No tasks yet. Create one!
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks && tasks.map((task) => <TasksCard task={task} key={task.id} />)}
    </div>
  );
}

export default Tasks;
