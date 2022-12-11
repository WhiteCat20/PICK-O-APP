import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="NavbarRegister Navbar-Home fixed-top overflow-hidden">
      <div className="d-flex container justify-content-between">
        <div>
          <a href="/" className="text-decoration-none text-white">
            <h5 className="picko-header">Pick'O</h5>
          </a>
        </div>
        <div className="login-register-pairs d-flex align-items-center">
          <Link className="text-decoration-none" to="/login">
            <h5 className="login-header">Login</h5>
          </Link>
          <Link className="text-decoration-none" to="/register">
            <h5 className="register-header">Register</h5>
          </Link>
        </div>
      </div>
    </nav>
  );
};
