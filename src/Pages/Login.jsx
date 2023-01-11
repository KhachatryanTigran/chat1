import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  console.log(fromPage);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        navigate(fromPage, { replace: true });
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Unterhalten</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sing in</button>
        </form>
        <p>
          <Link to="/register"> You don't have an account? Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
