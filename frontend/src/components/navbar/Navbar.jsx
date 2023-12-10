import { Link, useLocation } from "react-router-dom";
import { navigation } from "./Navigation";
import {Container} from "../ui/Container";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="bg-zinc-950">
        <Container className="flex justify-between items-center py-3">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">Task Manager</h1>
          </Link>
          <ul className="flex gap-x-2">
            {navigation.map(({ name, path }) => (
              <li
                key={path}
                className={`text-slate-300 ${
                  location.pathname === path && "text-green-400 rounded-xl"
                }`}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
