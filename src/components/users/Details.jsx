import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const getDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);

        setValue("userName", data.user.userName)
        setValue("email", data.user.email)
        setValue("phone", data.user.phone)
    }
    const updateUser = async (value) => {
        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
            {
                userName:value.userName
            }
        );
        if (response.status === 200) {
            navigate('/users');
        }

    }
    useEffect(() => {
        getDetails();
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit(updateUser)}>

                <div className="vh-100 d-flex align-items-center container">
                    <div className="w-50 p-4 bg-white ">

                        <div className="form-floating mb-3 mt-4">
                            <input type="text"  {...register("userName")} className="form-control" id="userName" placeholder="" />
                            <label htmlFor="userName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input disabled type="email" {...register("email")} className="form-control" id="email" placeholder="" />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input disabled type="text"  {...register("phone")} className="form-control" id="phone" placeholder="" />
                            <label htmlFor="phone">phone</label>
                        </div>
                        <button type="submit" className="mt-4 btn btn-primary">Update</button>
                    </div>
                </div>
            </form>
        </>
    )
}
