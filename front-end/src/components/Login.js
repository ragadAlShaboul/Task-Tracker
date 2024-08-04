import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="submit"
        value="Login"
      />

      <Link style={{margin:'0px'}} to="/signup">
      <input
        type="submit"
        value="SignUp"
      />
      </Link>
    </form>
  );
};

export default Login;
