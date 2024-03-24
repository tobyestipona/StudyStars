import { Link } from "react-router-dom";
import Button from "./Button";


function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/Question1">
        <Button color="primary" onClick={() => console.log()}>Start</Button>
      </Link>
    </div>
  );
}

export default Login;