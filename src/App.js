import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Product Dashboard Component
function ProductDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from external API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt={product.title} width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Add Product Form Component
function AddProductForm() {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can handle adding a product here)
    console.log({ productName, productImage, productPrice, productCategory });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductDashboard />} />
          <Route path="/add-product" element={<AddProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
