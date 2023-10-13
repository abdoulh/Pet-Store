import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/adminLists.css';
import AdminNav from "./AdminNav";
import AdminEditProduct from "./AdminEditProduct";
import AdminAddProduct from "./AdminAddProduct";

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [addProductModal, setAddProductModal] = useState(false);
    const [editProductModal, setEditProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleAddProductModal = () => {
        setAddProductModal(!addProductModal);
    };

    const toggleEditProductModal = (productId) => {
        setEditProductModal(!editProductModal);
        setSelectedProduct(productId);
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/product');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllProducts();
    }, []);

    const removeFromCart = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/api/product/${productId}`);
            setProducts(products.filter(product => product.id !== productId));
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <AdminNav />
            <button onClick={toggleAddProductModal}>Add Product</button>

            {addProductModal && (
                <div className="modal-custom">
                    <div onClick={toggleAddProductModal} className="overlay"></div>
                    <div className="modal-content-custom-cart">
                        <AdminAddProduct />
                    </div>
                </div>
            )}

            {editProductModal && selectedProduct && (
                <div className="modal-custom">
                    <div onClick={toggleEditProductModal} className="overlay"></div>
                    <div className="modal-content-custom-cart">
                        <AdminEditProduct selectedProduct={selectedProduct} />
                    </div>
                </div>
            )}

            <div className="admin-content">
                <table className="admin-product-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Animal</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.animal}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button className="admin-product-edit-button" onClick={() =>{ toggleEditProductModal(product.id); setSelectedProduct(product)}}>Edit</button>
                                    <button className="admin-product-delete-button" onClick={() => removeFromCart(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductList;
