import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await API.get('/dashboard/stats'); // You can create this endpoint in your backend
        setStats(res.data);
      } catch (err) {
        console.error('Failed to fetch dashboard stats');
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card text-center border border-primary shadow-sm p-3">
            <h5>Total Users</h5>
            <p>{stats.totalUsers}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border border-success shadow-sm p-3">
            <h5>Total Products</h5>
            <p>{stats.totalProducts}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border border-warning shadow-sm p-3">
            <h5>Total Orders</h5>
            <p>{stats.totalOrders}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border border-danger shadow-sm p-3">
            <h5>Total Revenue</h5>
            <p>₹{stats.totalRevenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
