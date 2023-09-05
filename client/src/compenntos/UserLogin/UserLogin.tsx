import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface RegistrationData {
  email: string;
  password: string;
}

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const data: RegistrationData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/api/auth/login", data)
      .then((response) => {
        console.log("Login successful:", response.data.message);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div>
      <Link to="/">
        <button>Click to  Home</button>
      </Link>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;
