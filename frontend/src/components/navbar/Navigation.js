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
  },
  {
    name: "Create Task",
    path: "/tasks/create",
  },
  {
    name: "Update Task",
    path: "/tasks/edit/:id",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];
