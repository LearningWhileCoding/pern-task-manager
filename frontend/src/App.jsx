import { Route, Routes, Outlet } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";

import { useAuth } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";

import { Container } from "./components/ui/Container";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Profile from "./components/pages/Profile";
import Tasks from "./components/pages/Tasks";
import FormTask from "./components/pages/FormTask";
import NotFound from "./components/pages/NotFound";

function App() {
  const { isAuth } = useAuth();
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route
            element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks" />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>  

          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirectTo="/signin" />}
          >
            <Route path="/profile" element={<Profile />} />

            <Route
              element={
                <TasksProvider>
                  <Outlet />
                </TasksProvider>
              }
            >
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/tasks/create" element={<FormTask />} />
              <Route path="/tasks/edit/:id" element={<FormTask />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
