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
                        <tr className="table-titles">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((user, index) => (
                            <tr className="table-content" key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        className="admin-delete-button btnedit"
                                        onClick={() => handleDeleteUser(user.id)}
                                        
                                    >
                                          <span class="icon-wrapper">
                                                <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showConfirmationModal && selectedUser && (
                    <div className="modal-custom">
                        <div className="overlay" onClick={() => setShowConfirmationModal(false)}></div>
                        <div className="modal-content-custom-admin">
                            <div id="ConfirmationModal" className="confirmation-modal">
                                <div className="confirmation-message">
                                    Are you sure you want to delete this user?
                                </div>
                                <div className="confirmation-buttons">
                                    <button className='confirmation-button' onClick={handleConfirmationConfirm}>Yes</button>
                                    <button className='confirmation-button' onClick={() => setShowConfirmationModal(false)}>No</button>
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
