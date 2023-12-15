import { FaTasks, FaPlusCircle } from "react-icons/fa";


export const publicRoutes = [
  {
    name: "Sign In",
    path: "/signin",
  },
  {
    name: "Sign Up",
    path: "/signup",
  },
  {
    name: "About",
    path: "/about",
  },
];

export const privateRoutes = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: <FaTasks />,
  },
  {
    name: "New",
    path: "/tasks/create",
    icon: <FaPlusCircle />,
  },
];
