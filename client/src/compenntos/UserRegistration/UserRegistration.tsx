import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

interface RegistrationData {
  email: string;
  password: string;
}

const UserRegistration = () => {
  const { register, handleSubmit } = useForm<RegistrationData>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (data: RegistrationData) => {
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            Email
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              {...register("email")}
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register("password")}
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/">
          <button className="btn btn-primary">Click to Home</button>
        </Link>
      </form>
    </>
  );
};

export default UserRegistration;
