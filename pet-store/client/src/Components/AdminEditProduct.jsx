import React, { useState } from "react";
import axios from '../services/axios-interceptor';
import '../index.css';
import { useNavigate } from "react-router-dom";

const AdminEditProduct = ({ selectedProduct }) => {

  const navigate = useNavigate()

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
    setEditedProduct({ ...editedProduct, imageUrl: file })

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


      const productId = selectedProduct.id

      await axios.put(
        `http://localhost:3000/api/product/${productId}`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate(0)
    } catch (error) {

      if (error.response.status === 401) {
        localStorage.clear()
        navigate('/Login')
      }
      else if (error.response.status === 403) {
        navigate('/HomePage')
      }


    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await EditProduct();
  };


  return (
    <div id="editProductModal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="method">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control border-0 p-3 my-2"
              placeholder={selectedProduct.name}
              onChange={handleInputChange}

            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="method">Category:</label>
            <select
              id="category"
              name="category"
              className="form-control"
              placeholder={selectedProduct.category}
              onChange={handleInputChange}
            >
              <option disabled selected value=''> Select product category </option>
              <option value="Food">Food</option>
              <option value="Toy">Toy</option>
              <option value="Upholstery">Upholstery</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="animal" className="method">Animal:</label>
            <select
              id="animal"
              name="animal"
              className="form-control"
              placeholder={selectedProduct.animal}
              onChange={handleInputChange}
            >
              <option disabled selected value=''> Selected animal</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl" className="method">Image:</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type='file'
              placeholder={selectedProduct.imageUrl}
              onChange={handleImage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="method">Description:</label>
            <textarea
              id="description"
              name="description"
              className="form-control-description"
              placeholder={selectedProduct.description}
              onChange={handleInputChange}

            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="method">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step=".01"
              className="form-control border-0 p-3 my-2"
              placeholder={'$' + selectedProduct.price}
              onChange={handleInputChange}

            />
          </div>
          <div className="form-group">
            <input type="submit" value='Edit Product' className="admin-submit-product-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
