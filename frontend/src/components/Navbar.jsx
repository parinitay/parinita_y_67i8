import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/dashboard">🛒 E-Admin</Link>
      <div className="ms-auto">
        <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
