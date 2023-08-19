"use client";
import React from 'react'
import './Multistep.css'
export default function Multistep() {
  return (
    <div>
          
            
        <div className='step-row mb-0 w-100 d-flex justify-content-between  d-none d-lg-flex'>
        <div id='progress'></div>
        <div className='step-col p-4 '>INFO</div>
        <div className='step-col  p-4 ' >SYMPTOMS</div>
        <div className='step-col   p-4 '>QUESTIOND</div>
        <div className='step-col  p-4 '>DETAILS</div>
        <div className='step-col  p-4 '>CONDITIONS</div>
        <div className='step-col  p-4 '>TREATMENT</div>
      </div>

      {/* <button id='next' >next</button> */}
      {/* <button id='back'>back</button> */}
    </div>
  )
}
