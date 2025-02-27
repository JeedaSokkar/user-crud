import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function create() {
  const { register, control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const OnSubmit = async (result) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, result);
      if (response.status === 201) {
        navigate('/users');
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }


  return (
    <>

      <form onSubmit={handleSubmit(OnSubmit)}>
       
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="w-50 p-4 bg-white shadow rounded-3">
           <h2 className="text-center mb-4 text-primary">Create Account</h2>
            <div className="form-floating mb-3 mt-4">
              <input type="text"  {...register("userName")} className="form-control" id="userName" placeholder="" />
              <label htmlFor="userName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" {...register("email")} className="form-control" id="email" placeholder="" />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="Password" {...register("password")} className="form-control" id="password" placeholder="" />
              <label htmlFor="password">password</label>
            </div>
            <div className="form-floating">
              <input type="text"  {...register("phone")} className="form-control" id="phone" placeholder="" />
              <label htmlFor="phone">phone</label>
            </div>
            <button type="submit" className="mt-4 btn btn-primary">Add</button>
          </div>
        </div>
      </form>
      <DevTool control={control} />

    </>
  )
}
