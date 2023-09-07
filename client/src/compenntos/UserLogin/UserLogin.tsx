import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface RegistrationData {
  email: string;
  password: string;
}

function UserLogin() {
  const { register, handleSubmit } = useForm<RegistrationData>(); // Move useForm outside the component

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (data: RegistrationData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
        {
          headers: { authorization: "test-token" },
        }
      );

      const token = response.data.responseObj.token;
      console.log("Login successful. Token:", token);
      localStorage.setItem("userToken", token);
      alert("Login successful");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            type="email"
            {...register("email")}
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            {...register("password")}
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default UserLogin;
