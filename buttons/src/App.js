import Button from "./components/Button";
import { FcGoogle } from "react-icons/fc";
import './App.css';

function App() {
  return (
    <div className="main">
      <Button variant="success" size="lg">
        <FcGoogle />
        Login in with Google
      </Button>
      <Button variant="warning" size="sm">
        <FcGoogle />
        Login in with Google
      </Button>
      <Button variant="danger" size="sm">
        <FcGoogle />
        Login in with Google
      </Button>
    </div>
  );
}

export default App;
