import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';

const Users = () => {

    const loadedUsers = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <Navbar></Navbar>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Email</th>
                        <th>Created At</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        loadedUsers.map((user,index) => <tr key={user._id}>
                
                        <th>{index + 1}</th>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                     
                    
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;