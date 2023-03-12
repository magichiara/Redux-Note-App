import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { FcLikePlaceholder } from "react-icons/fc";
import "./loginform.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, notes: [] };
    dispatch(login(data));
  };

  return (
    <div className="LoginForm">
      <div className="title">
        <i>
          <FcLikePlaceholder />
        </i>
        <div className="text">
          <h2>WELCOME</h2>
          <p>Please Login</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
