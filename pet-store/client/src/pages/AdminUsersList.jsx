import React, {useState, useEffect} from "react";
import '/index.css'

const UsersList = () => {

const [users, setUsers] = useState([])

useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/users');
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching Users:', error);
        }
    };

    fetchUsers();
}, []);

return (
    <div>
        
    </div>
)


}


export default UsersList;


