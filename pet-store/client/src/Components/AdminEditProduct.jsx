import React, { useState } from "react";
import axios from "axios";
import '../index.css';

const AdminEditProduct = () => {
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    category: '',
    animal: '',
    imageUrl: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedProduct({ ...editedProduct, [name]: value });
    console.log(editedProduct);
  };

  const EditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editedProduct.name);
      formData.append("category", editedProduct.category);
      formData.append("animal", editedProduct.animal);
      formData.append("imageUrl", editedProduct.imageUrl);
      formData.append("description", editedProduct.description);
      formData.append("price", editedProduct.price);

      // Replace 'productId' with the actual product ID you want to edit
      const productId = 'editedProduct';

      await axios.put(
        `http://localhost:3000/api/product/${productId}`,
        formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error(
        "Error Editing product:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await EditProduct();
  };
  

  return (
    <div id="editProductModal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal-box">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={editedProduct.category}
              onChange={handleInputChange}
            >
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal:</label>
            <select
              id="animal"
              name="animal"
              value={editedProduct.animal}
              onChange={handleInputChange}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <textarea
              id="imageUrl"
              name="imageUrl"
              value={editedProduct.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={editedProduct.description}
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
              value={editedProduct.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Edit Product</button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
