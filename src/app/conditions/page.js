import Link from 'next/link'
import React from 'react'
import './conditions.css'
export default function conditions() {
  return (
    <>
      <div className="container ">
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
               <p>Female</p>
          <p>20</p>
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
        <div className="col-12 d-flex justify-content-between btn-conainer ">
          <button name="" id="" class="btn " role="button">
            <Link href="/questions"className="btn previous-btn">
              Previous
            </Link>
          </button>{" "}
          <button name="" id="" class="btn " role="button">
            <Link href="/detailes"  className="btn continue-btn">
              Continue
            </Link>
          </button>
        </div>









        </div>
      


      </div>
    </>
  )
}