"use client";
import React from 'react'
import { NavLink } from 'react-bootstrap'
export default function Navbar() {
  return (
    <div> <nav className="navbar navbar-expand-lg bg-body-tertiary bg-main-light  mb-4 ">
    <div className="container ">
      <NavLink className="navbar-brand mt-2" to="/">
       {/* <img src={logo} alt="" /> */}
       <h1><em> <span   style={{color:'#0696f3'  }}>Elahly</span>  </em>Hospital</h1>
      </NavLink>

    </div>
  </nav></div>
  )
}
