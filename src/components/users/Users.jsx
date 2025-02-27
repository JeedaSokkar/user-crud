import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Users() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        setUsers(data.users);

    }
    const deletUser =async(id)=>{
        const{data}=await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
       // getUsers();
       alert(data.message);
    }
    useEffect(() => {
        getUsers();
    }, [users])
    return (
        <>
            <div className='container'>
            <div className="d-flex row g-3 mt-4">
                {users.map((user) =>
                    <div key={user._id} className="col-md-4 d-flex justify-content-center">
                        <div className="card  shadow " style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Name : {user.userName}</h5>
                                <p className="card-text">Email : {user.email}</p>
                                <span>phone : {user.phone}</span>
                                <br/>
                                <button onClick={()=>deletUser(user._id)} className='btn btn-outline-danger mt-2'>Delete</button>
                                <Link className='btn btn-outline-primary ms-2 mt-2' to={`/users/${user._id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Link className="btn btn-primary mb-4" to={'/create'}>Create</Link>
            </div>
            </div>
        </>
    )
}
