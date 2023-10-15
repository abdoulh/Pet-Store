import React, { useState, useEffect } from "react";
import axios from '../services/axios-interceptor';
import '../styles/adminLists.css';
import AdminNav from "./AdminNav";
import AdminEditProduct from "./AdminEditProduct";
import AdminAddProduct from "./AdminAddProduct";
import { useNavigate } from "react-router-dom";

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


    const navigate = useNavigate()


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


    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/product/admin');
            setProducts(response.data);
        } catch (error) {
            console.log(error.response.status);

            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/Login')
            }
            else if (error.response.status === 403) {
                navigate('/HomePage')

            }
        }
    }


    useEffect(() => {

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

                console.error('Error deleting product', error);

                if (error.response.status === 401) {
                    localStorage.clear()
                    navigate('/Login')
                }
                else if (error.response.status === 403) {
                    navigate('/HomePage')
                }
            }
        }

        setShowConfirmationModal(false);
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <AdminNav />
                <div className="add-product-button-container ">
                    <button onClick={toggleAddProductModal}>Add Product</button>
                </div>
            </div>

            {addProductModal && (
                <div className="modal-custom">
                    <div onClick={toggleAddProductModal} className="overlay"></div>
                    <div className="modal-content-custom-cart cardbackgroundcolor">
                        <AdminAddProduct />
                    </div>
                </div>
            )}
            {showConfirmationModal && selectedProduct && (
                <div className="modal-custom">
                    <div onClick={toggleDeleteModal} className="overlay"></div>
                    <div className="modal-content-custom-cart ">
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
                    <div className="modal-content-custom-cart cart">
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
                                            className="admin-product-edit-button Btn"
                                            onClick={() => {
                                                toggleEditProductModal(product);
                                            }}
                                        >Edit
                                            <svg class="svg" viewBox="0 0 512 512">
                                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                                        </button>
                                        <button
                                            className="admin-product-delete-button btnedit"

                                            onClick={() => removeFromCart(product.id)}
                                        >
                                            <span class="icon-wrapper">
                                                <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
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
