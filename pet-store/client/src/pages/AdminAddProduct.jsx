import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAddProduct = ()=>{ 
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [animal, setAnimal] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleAdminAddProduct = async (event) => {
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
    <dev>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Add product
                    </button>
        </div>
    </dev>
    )
}


export default AdminAddProduct;