import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/adminLists.css";
import AdminNav from "./AdminNav";
import AdminEditProduct from "./AdminEditProduct";
import AdminAddProduct from "./AdminAddProduct";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div
            id="ConfirmationModal"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="modal-box">
                <div className="confirmation-message">
                    Are you sure you want to delete this product?
                </div>
                <div className="confirmation-buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [addProductModal, setAddProductModal] = useState(false);
    const [editProductModal, setEditProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const toggleAddProductModal = () => {
        setAddProductModal(!addProductModal);
    };

    const toggleEditProductModal = (productId) => {
        setEditProductModal(!editProductModal);
        setSelectedProduct(productId);
    };

    const toggleDeleteModal = (productId) => {
        setShowConfirmationModal(!showConfirmationModal);
        setSelectedProduct(productId);
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/product");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllProducts();
    }, []);

    const removeFromCart = (productId) => {
        toggleDeleteModal(productId);
    };

    const handleConfirmationConfirm = async () => {
        if (selectedProduct) {
            const productId = selectedProduct;
            try {
                await axios.delete(`http://localhost:3000/api/product/${productId}`);
                setProducts(products.filter((product) => product.id !== productId));
                console.log("Product deleted successfully");
            } catch (error) {
                console.error("Error deleting product", error);
            }
        }

        setShowConfirmationModal(false);
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <AdminNav />
                <div className="add-product-button-container">
                    <button onClick={toggleAddProductModal}>Add Product</button>
                </div>
            </div>

            {addProductModal && (
                <div className="modal-custom">
                    <div onClick={toggleAddProductModal} className="overlay"></div>
                    <div className="modal-content-custom-cart">
                        <AdminAddProduct />
                    </div>
                </div>
            )}
            {showConfirmationModal && selectedProduct && (
                <div className="modal-custom">
                    <div onClick={toggleDeleteModal} className="overlay"></div>
                    <div className="modal-content-custom-cart">
                        <ConfirmationModal
                            isOpen={showConfirmationModal}
                            onCancel={() => setShowConfirmationModal(false)}
                            onConfirm={handleConfirmationConfirm}
                        />
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
                                <td >
                                    <div className="admin-buttons">
                                        <button
                                            className="admin-product-edit-button"
                                            onClick={() => {
                                                toggleEditProductModal(product);
                                                ;
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="admin-product-delete-button"
                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
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
