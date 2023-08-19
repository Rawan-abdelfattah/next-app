"use client";

import Link from 'next/link'
import React from 'react'
import './conditions.css'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

export default function Conditions() {
  const router = useRouter();
  const age= useSelector((state)=>state.user.age)
  const gender= useSelector((state)=>state.user.gender)
  const bothering= useSelector((state)=>state.user.bothering)
  const conditions= useSelector((state)=>state.user.conditions)
  const pregnant= useSelector((state)=>state.user.pregnant)
  const medications= useSelector((state)=>state.user.medications)

  if(!age) router.push("/info")
  return (
    <>
      <div className="container ">
        <Header/>
        <div class="row  justify-content-center align-items-center g-2  shadow p-4 mt-4">
          <div className='col-12 condition-title rounded p-2'>
          Only <span className='fw-bold'>low strength matches</span>  found. Try <span className='fw-bold'> adding more symptoms</span>  to improve your results.
          </div>
       
          <div className='col-lg-6 text-center conditon-para'>
            We are unable to find any conditions that match the symptoms you entered.
            <br></br>
            <Link className='text-color text-decoration-none' href={'/info'}>Edit your symptoms</Link>
</div>

  <div className='col-lg-5 m-4'>
          <hr/>
          <div className='d-flex justify-content-between'>
            <p>Gender</p>
            <p>Age</p>
            <p>Edit</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p>{gender}</p>
            <p>{age}</p>
            <p></p>
          </div>
       
          <hr/>
          <div className='d-flex justify-content-between'>
               <p>My Symptoms</p>
          <p>Edit</p>
          </div>
          <p>tiredness , abdominal</p>
          <p>tiredness </p>
          <hr/>
          <div className='text-center'>
                <button name="" id="" class="btn " role="button">
              <Link href="/info" className="btn start-over-btn">
                Start Over
              </Link>
            </button>
          </div>
      
        </div>
<hr/>
<div className="col-12 d-flex justify-content-between  ">
        <div className='col-5'>
           <button name="" id="" class="btn p-4 form-control w-100 previous-btn" >
                <Link href="/questions" className=" text-decoration-none text-reset">
                  Previous
                </Link>
             </button>{" "}
        </div>
        <div className='col-5'>    
          <button name="" id=""class="btn p-4 form-control w-100 continue-btn">
            <Link href="/details" className=" text-decoration-none text-reset">
              Continue
            </Link>
          </button>
        </div>
   
      </div>
    </div>
  </div>
    </>
  )
}
