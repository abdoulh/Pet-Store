import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import '../styles/adminLists.css'



const AdminUsersList = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users');
                console.log(response.data);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };

        fetchUsers();
    }, []);
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

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:3000/api/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
            console.log('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <AdminNav />

            <div className="admin-content">
                <table className="admin-product-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="admin-product-delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminUsersList;
