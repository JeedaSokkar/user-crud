import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container">
    <Link className="navbar-brand text-white" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active  text-primary" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.item} nav-link text-white`} to={'/users'}>User</Link>
        </li>
        <li className="nav-item">
        <Link className={`${style.item} nav-link text-white`}  to={'/create'}><span className='me-2 '><i className="fa-solid fa-user-plus"></i></span>Create</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
