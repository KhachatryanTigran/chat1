import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active");
export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className={setActive}>
          {" "}
          Home
        </NavLink>

        <NavLink to="/login" className={setActive}>
          Login
        </NavLink>

        <NavLink to="/register" className={setActive}>
          Register
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
