import { useAuth } from "../../context/AuthContext";

function Home() {
  const data = useAuth();
  return <div>Home</div>;
}

export default Home;
