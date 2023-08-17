"use clinet";
import React from 'react'
import logo from '../../../assets/logo.jpg'
import Image from 'next/image';
export default function Header() {
  return (
    <>

    <div className='row d-flex pt-4'>
        <div className="col-lg-1">        <Image   src={logo} height={70}  alt="" />

</div>
<div className="col-10 d-flex mt-3">
      <h2 className='ms-4' style={{fontSize: '1.9375rem' }}>Symptom Checker</h2>
        <span className='mt-2 ms-3' style={{ color: '#0f83d1' ,fontSize:"16px" }}>WITH BODY MAP</span>
</div>
      
    </div>
        
    </>
  )
}
