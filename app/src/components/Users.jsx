import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/', 
                
                );
                setUsers(response.data);
                console.log("users", response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <h1 style={{backgroundColor:'lightcoral'}}>User names: {users.length}</h1>
            <ul>
                {users.map((user, index) => (
                    <div key={index}>
                        <ul>
                            
                        </ul>
                       <li style={{backgroundColor:"lightblue"}}>
                            Name: {user.name},
                            id: {user.id},
                            tel: {user.tel}
                    </li>
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Users;
