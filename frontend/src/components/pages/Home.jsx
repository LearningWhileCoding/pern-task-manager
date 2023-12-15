import { useAuth } from "../../context/AuthContext";
import { Card } from "../ui/Card";

function Home() {
  const data = useAuth();
  return (
    <Card>
      <h1 className="font-bold justify-center text-2xl py-4">Revolutionize Your Productivity with Our PERN Powered Task Manager</h1>
    <h2>Welcome to our innovative task manager, a dynamic solution meticulously crafted with the cutting-edge PERN Stack. Designed to elevate your productivity, our task manager is a game changer for individuals and teams seeking efficiency...
    </h2>
    </Card>
  );
}

export default Home;
