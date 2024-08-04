import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSignup({username,password})
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
        type="password"
        placeholder="Re-Enter Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input 
        type="submit"
        value="SignUp"
      />
      <Link style={{margin:'0px'}} to="/">
        <input 
        type="submit"
        value="Back"/>
      </Link>

      
    </form>
  );
}

export default Signup;
