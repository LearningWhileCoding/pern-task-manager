import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Card, Button, Input, Label } from "../ui/Index";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, errors: signInErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signIn(data);
    if (user) {
      navigate("/profile");
    }
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {signInErrors &&
          signInErrors.map((error) => (
            <p key={error} className="bg-red-500 text-center p-2">
              {error}
            </p>
          ))}
        <h1 className=" text-4xl font-bold my-2 text-center">Sign In</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Your email"
            autoComplete="email"
            {...register("email", { required: true })}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />

          <Button type="submit">Sign In</Button>
        </form>

        <div className="flex justify-between my-4">
          <p>New here ?</p>
          <Link to="/signup">Sign Up Now</Link>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
