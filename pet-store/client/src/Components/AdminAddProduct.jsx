import React, { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';

const AdminAddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    animal: "",
    imageUrl: "",
    description: "",
    price: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("animal", animal)
      formData.append("imageUrl", imageUrl)
      formData.append("description", description)
      formData.append("price", price)
      const response = await axios.post(
        "http://localhost:3000/api/product",
        formData)
    } catch (error) {
      console.error(
        "Error adding post:",
        error.response ? error.response.data : error.message
      );
    }
  }



  return (
    <div id="createProductModal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal-box">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
            >
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal:</label>
            <select
              id="animal"
              name="animal"
              value={product.animal}
              onChange={handleInputChange}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};
export default AdminAddProduct;