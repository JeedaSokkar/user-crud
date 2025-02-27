import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center  text-center p-6 vh-100">
      <h1 className="font-bold text-gray-800 text-primary">Manage Users Easily & Quickly!</h1>
      <p className="text-gray-600 mt-2">You can add, view, and update user data effortlessly.</p>
      <div className="d-flex justify-content-center mt-4">
                <Link className="btn btn-primary mb-4" to={'/create'}>Create New User</Link>
            </div>
    </div>
  );
}
