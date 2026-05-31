import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="button-nav">
        Home
      </NavLink>
      <NavLink to="/timer-page" className="button-nav">
        Workout Timer
      </NavLink>
    </nav>
  );
}
