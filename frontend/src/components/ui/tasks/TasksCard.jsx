import { Card, Button } from "../Index";
import { useTasks } from "../../../context/TasksContext";

function TasksCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card key={task.id} className="py-4 px-7">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex justify-end gap-2">
        <Button>Edit</Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("Are you sure you want delete the task ?")) {
              await deleteTask(task.id);
            }
          }}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default TasksCard;
