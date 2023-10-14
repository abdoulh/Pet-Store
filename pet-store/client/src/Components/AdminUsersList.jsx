import React, { useState, useEffect } from "react";
import axios from '../services/axios-interceptor'
import AdminNav from "./AdminNav";
import '../styles/adminLists.css'
import { useNavigate } from "react-router-dom";



const AdminUsersList = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate()


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

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`/api/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
            console.log('User deleted successfully.');
        } catch (error) {
            console.error('Error deleting user:', error);

            if (error.response.status === 401) {
                localStorage.clear()
                navigate('/Login')
            }
            else if (error.response.status === 403) {
                navigate('/HomePage')
            }

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
