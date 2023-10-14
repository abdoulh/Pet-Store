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
    const name = e.target.name
    const value = e.target.value
    setProduct({ ...product, [name]: value });
    console.log(product)
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    setProduct({ ...product, imageUrl: file })

  }

  const addProduct = async (product) => {
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("category", product.category);
      formData.append("animal", product.animal)
      formData.append("image", product.imageUrl)
      formData.append("description", product.description)
      formData.append("price", product.price)
      await axios.post("http://localhost:3000/api/product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response ? error.response.data : error.message
      );
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    addProduct(product)

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

              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"

              onChange={handleInputChange}
            >
              <option disabled selected value=''> Select product category </option>
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
            <div className="form-group">
              <label htmlFor="animal">Animal:</label>
              <select
                id="animal"
                name="animal"

                onChange={handleInputChange}
              >
                <option disabled selected value=''> Select animal</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">imageURl</label>
              <input

                type="file"
                id="imageUrl"
                name="imageUrl"

                onChange={handleImage}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"

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

              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value='Add product' />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminAddProduct;