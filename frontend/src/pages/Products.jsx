import React, { useEffect, useState } from 'react';
import API from '../services/api';
import './Products.css';


function Products() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    imageUrl: ''
  });

  const fetchProducts = async () => {
    const res = await API.get('/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/products', formData);
    setFormData({ name: '', price: '', category: '', stock: '', imageUrl: '' });
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Products</h2>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="card p-4 mb-4 border shadow-sm">
        <div className="row g-3">
          <div className="col-md-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              className="form-control"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              className="form-control"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">Add</button>
          </div>
        </div>
      </form>

      {/* Products List */}
      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Products;
