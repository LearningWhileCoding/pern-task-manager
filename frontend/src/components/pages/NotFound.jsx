import { Link } from "react-router-dom";
import { Card } from "../ui/Card";

function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center flex-col">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">404</h1>
        <h3 className="text-xl text-center">Page Not Found</h3>
        <Link to="/" className="text-green-500 text-center">
          Go back to home
        </Link>
      </Card>
    </div>
  );
}

export default NotFound;
