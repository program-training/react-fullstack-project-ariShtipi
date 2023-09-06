import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface RegistrationData {
  email: string;
  password: string;
}

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    const data: RegistrationData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/api/auth/register", data, {
        headers: {
          "authorization ": "test-token",
        },
      })
      .then((response) => {
        console.log("Registration successful:", response.data.message);
        alert("Registration successful:");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("Error during registration:");
      });
  };

  return (
    <div>
      <h1>User Registration</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleRegistration}>Register</button>
      <div>
        <Link to="/">
          <button>Click to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default UserRegistration;
