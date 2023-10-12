import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>
                            <strong>First Name: </strong>{user.firstName} 
                        </div>
                        <div>
                            <strong>Last Name: </strong>{user.lastName}
                        </div>
                        <div>
                            <strong>Email: </strong>{user.email}
                        </div>
                        <div>
                            <strong>Role: </strong>{user.role}
                        </div>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminUsersList;
