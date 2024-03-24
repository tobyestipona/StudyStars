import { Link } from "react-router-dom";
import Button from "./Button";
import { SetStateAction, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#200657",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1 style={{color: "white"}}>Study Stars</h1>
      <div>
        <input
          type="text"
          placeholder="NetID"
          value={username}
          onChange={handleUsernameChange}
          style={{ marginRight: "10px", marginTop: "20px" }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginRight: "10px", marginTop: "20px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/Question1">
          <Button color="primary" onClick={() => console.log()}>
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
