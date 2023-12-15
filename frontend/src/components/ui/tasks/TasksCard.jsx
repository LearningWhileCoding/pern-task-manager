import { Card, Button } from "../Index";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../../context/TasksContext";
import { PiTrashBold } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";

function TasksCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
  return (
    <Card key={task.id} className="py-4 px-7 justify-center flex flex-col">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p className="py-4 overflow-hidden">{task.description}</p>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            navigate("/tasks/edit/" + task.id);
          }}
        >
          <FaEdit /> Edit
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("Are you sure you want delete the task ?")) {
              await deleteTask(task.id);
            }
          }}
        >
          <PiTrashBold /> Delete
        </Button>
      </div>
    </Card>
  );
}

export default TasksCard;
