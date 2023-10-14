import React, { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';


const AdminAddProduct = ({ onAddProduct }) => {
  


  return (
    <div id="createProductModal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="modal-box">
        <h2>Add Product</h2>
        
      </div>
    </div>
  );
};
export default AdminAddProduct;