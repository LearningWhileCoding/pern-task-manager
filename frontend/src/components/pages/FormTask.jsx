import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../../context/TasksContext";
import { Card, Input, TextArea, Label, Button } from "../ui/Index";

function FormTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { createTask, getTask, updateTask, errors: taskErrors } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (!params.id) {
      const res = await createTask(data);
      if (res) {
        navigate("/tasks");
      }
    } else {
      const task = await updateTask(params.id, data);
      if (task) {
        navigate("/tasks");
      }
    }
  });

  const params = useParams();
  const title = params.id ? "Edit Task" : "New Task";
  const button = params.id ? "Update" : "Create";

  useEffect(() => {
    if (params.id) {
      getTask(params.id)
        .then((task) => {
          setValue("title", task.title);
          setValue("description", task.description);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {taskErrors.map((error) => (
          <p key={error} className="bg-red-500 text-center p-2">
            {error}
          </p>
        ))}

        <h1 className="text-3xl font-bold my-4">{title}</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-red-500 text-xs">Title is required</p>
          )}

          <Label htmlFor="description">Description</Label>
          <TextArea
            placeholder="Description"
            rows={3}
            {...register("description", { required: false })}
          />
          <Button>{button}</Button>
        </form>
      </Card>
    </div>
  );
}

export default FormTask;
