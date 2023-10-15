import React, { useState } from "react";
import axios from '../services/axios-interceptor';
import '../styles/adminEdit.css'
import { useNavigate } from "react-router-dom";

const AdminEditProduct = ({ selectedProduct }) => {
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState({
    name: selectedProduct.name,
    category: selectedProduct.category,
    animal: selectedProduct.animal,
    imageUrl: selectedProduct.imageUrl,
    description: selectedProduct.description,
    price: selectedProduct.price,
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedProduct({ ...editedProduct, [name]: value });
    console.log(editedProduct);
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    setEditedProduct({ ...editedProduct, imageUrl: file });
  }

  const EditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editedProduct.name);
      formData.append("category", editedProduct.category);
      formData.append("animal", editedProduct.animal);
      formData.append("imageUrl", editedProduct.imageUrl);
      formData.append("description", editedProduct.description);
      formData.append("price", editedProduct.price);

      const productId = selectedProduct.id;

      await axios.put(
        `http://localhost:3000/api/product/${productId}`,
        formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      navigate(0);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate('/Login');
      } else if (error.response.status === 403) {
        navigate('/HomePage');
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await EditProduct();
  };

  return (
    <div id="editProductModal-admin" >
      <div className="modal-box-admin">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-admin">
            <label htmlFor="name-admin">Product Name:</label>
            <input
              type="text"
              id="name-admin"
              name="name"
              placeholder={selectedProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-admin">
            <label htmlFor="category-admin">Category:</label>
            <select
              id="category-admin"
              name="category"
              placeholder={selectedProduct.category}
              onChange={handleInputChange}
            >
              <option disabled selected value=''> Select product category </option>
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
          </div>
          <div className="form-group-admin">
            <label htmlFor="animal-admin">Animal:</label>
            <select
              id="animal-admin"
              name="animal"
              placeholder={selectedProduct.animal}
              onChange={handleInputChange}
            >
              <option disabled selected value=''> Selected animal</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div className="form-group-admin">
            <label htmlFor="imageUrl-admin">Image URL:</label>
            <input
              id="imageUrl-admin"
              name="imageUrl"
              type='file'
              placeholder={selectedProduct.imageUrl}
              onChange={handleImage}
            />
          </div>
          <div className="form-group-admin">
            <label htmlFor="description-admin">Description:</label>
            <textarea
              id="description-admin"
              name="description"
              placeholder={selectedProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-admin">
            <label htmlFor="price-admin">Price:</label>
            <input
              type="number"
              id="price-admin"
              name="price"
              placeholder={selectedProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-admin">
            <input type="submit" value='Edit Product' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
