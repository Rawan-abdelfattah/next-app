"use client";
import Image from 'next/image';
import React from 'react'
import { NavLink } from 'react-bootstrap'
import logo from"../../../assets/logo.jpg"
export default function Navbar() {
  return (
    <div> <nav className="navbar navbar-expand-lg bg-body-tertiary bg-main-light  mb-4 ">
    <div className="container ">
      <NavLink className="navbar-brand d-flex mt-2" to="/">
       

         <h1 > <span   style={{color:'#0696f3'  }}>Elahly</span> Hospital</h1>


      </NavLink>

    </div>
  </nav></div>
  )
}
