import React, { useState, useEffect } from "react";
import axios from '../services/axios-interceptor'
import AdminNav from "./AdminNav";
import '../styles/adminLists.css'
import { useNavigate } from "react-router-dom";

const AdminUsersList = () => {
    const [users, setUsers] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const navigate = useNavigate()


    const customers = users.slice().filter((user) => {
        return user.role === 'customer'
    })


    const fetchUsers = async () => {

        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching Users:', error);

            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/Login')
            }
            else if (error.response.status === 403) {
                navigate('/HomePage')
            }

        }
    };

    useEffect(() => {

        fetchUsers();

    }, []);

    const handleDeleteUser = (userId) => {
        setSelectedUser(userId);
        setShowConfirmationModal(true);
    };

    const handleConfirmationConfirm = async () => {
        if (selectedUser) {
            try {
                await axios.delete(`http://localhost:3000/api/users/${selectedUser}`);
                setUsers(users.filter((user) => user.id !== selectedUser));
                console.log("User deleted successfully.");
            } catch (error) {
                console.error("Error deleting user:", error);
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
        setSelectedUser(null);
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
                        {customers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        className="admin-delete-button"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showConfirmationModal && selectedUser && (
                    <div className="modal-custom">
                        <div className="overlay" onClick={() => setShowConfirmationModal(false)}></div>
                        <div className="modal-content-custom-cart">
                            <div id="ConfirmationModal" className="confirmation-modal">
                                <div className="confirmation-message">
                                    Are you sure you want to delete this user?
                                </div>
                                <div className="confirmation-buttons">
                                    <button onClick={handleConfirmationConfirm}>Yes</button>
                                    <button onClick={() => setShowConfirmationModal(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminUsersList;
