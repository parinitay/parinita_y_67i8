import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-light border-end vh-100 p-3" style={{ width: '200px' }}>
      <h5 className="mb-4">📊 Admin</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className={`nav-link ${location.pathname === '/orders' ? 'active' : ''}`}>Orders</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
