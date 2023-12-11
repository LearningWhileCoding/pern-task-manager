import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../context/TasksContext";
import { Card, Input, TextArea, Label, Button } from "../ui/Index";

function FormTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createTask } = useTasks();

  const [postErrors, setPostErrors] = useState([]);

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createTask(data);
    if (res) {
      navigate("/tasks");
    }
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        { 
        postErrors.map((error) => (
          <p key={error} className="bg-red-500 text-center p-2">
          {error}
        </p>
        ))}

        <h1 className="text-3xl font-bold my-4">New Task</h1>
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
          <Button>Create</Button>
        </form>
      </Card>
    </div>
  );
}

export default FormTask;
