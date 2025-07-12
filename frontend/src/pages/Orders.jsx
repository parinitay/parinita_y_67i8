import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await API.get('/orders');
    setOrders(res.data);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/orders/${id}`, { status });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Orders</h2>

      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>User ID</th>
            <th>Products</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.userId}</td>
              <td>
                <ul className="mb-0">
                  {order.products.map(p => (
                    <li key={p.id}>{p.name} × {p.quantity || 1}</li>
                  ))}
                </ul>
              </td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <select
                  className="form-select form-select-sm"
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
