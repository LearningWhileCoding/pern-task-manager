import { Routes, Route } from "react-router-dom";
import {Container} from "./components/ui/Container";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Profile from "./components/pages/Profile";
import Tasks from "./components/pages/Tasks";
import FormTask from "./components/pages/FormTask";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<FormTask />} />
          <Route path="/tasks/edit/:id" element={<FormTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
