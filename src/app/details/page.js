import Link from 'next/link'
import React from 'react'
import './details.css'
export default function details() {
  return (
    <div className="container ">
    <div class="row  g-2  shadow p-4 mt-4">
      <div className='col-lg-4'>
        <h4>
        Conditions that match your symptoms
        </h4>
        <span style={{color:'#0696f3'}}>
        UNDERSTANDING YOUR RESULTS 
        </span>

        <div className='disease-card w-100 shadow p-4 rounded gy-4 mb-2'>
         <p> Lyme Disease </p>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
</div>

         <p className='text-secondary mt-3'>Moderate match</p>
        </div>
        <div className='disease-card w-100 shadow p-4 rounded gy-4 mb-2'>
         <p> Lyme Disease </p>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
</div>

         <p className='text-secondary mt-3'>Moderate match</p>
        </div>
        <div className='disease-card w-100 shadow p-4 rounded gy-4 mb-2'>
         <p> Lyme Disease </p>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
</div>

         <p className='text-secondary mt-3'>Moderate match</p>
        </div>
        <div className='disease-card w-100 shadow p-4 rounded gy-4 mb-3'>
         <p> Lyme Disease </p>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
</div>

         <p className='text-secondary mt-3'>Moderate match</p>
        </div>

      </div>

      <div className='col-lg-7 m-3'>
        {/* <div></div> */}
        <h3 className='text-center ' style={{marginTop:'70px' ,fontWeight: "700" , 
    color: '#6d6d6d'}}>Lyme Disease   </h3><h6  className='text-center' > Borreliosis</h6>

        <div className='d-flex justify-content-around mt-4'>
                  <p>CONDITIONS</p>
        <p><Link href={'/treatment'} className=" text-decoration-none text-reset">TREATMENT OPTIONS</Link> </p>
        
        </div><hr/>

        <div>
          <h4>Symptoms</h4>
          <p>Symptoms include a red "bulls eye" rash, fever, chills, muscle pain, body ache, stiff neck, exhaustion, headache, swollen and painful joints, facial weakness, behavior changes, itchiness, irregular heart rhythm, and meningitis.</p>

        </div>
        
        <div className='mt-4 pt-4'>
          <h4>How Common</h4>
          <p>In 2009, doctors diagnosed between 30,000 and 40,000 new cases of Lyme disease in the U.S.</p>

        </div>
        <div className='mt-4 pt-4'>
          <h4>Overview</h4>
          <p>Lyme disease is a bacterial infection spread through tick bites. A tick may feed on a mouse or deer with the bacteria and then bite a person, spreading the disease. Lyme disease may cause a rash and flu-like symptoms. Prompt treatment with antibiotics can prevent complications such as joint and nerve problems.</p>

        </div>
        <hr/>
         
          <div className="col-12 text-center">
          <h4>Do you think you have this condition?</h4>            <div className=" ">
              <a name="" id="" class="btn yes-btn" href="#" role="button">
                Yes
              </a>
              <a name="" id="" class="btn no-btn" href="#" role="button">
                No
              </a>
              <a name="" id="" class="btn no-btn" href="#" role="button">
                Maybe
              </a>
            </div>

        </div>
        <hr/>
        <div className='col-12'>
          <h4>Did You Know?</h4>
          <ul>
            <li>Lyme disease gets its name from Lyme, Connecticut. Researchers first discovered the disease there in the 1970s when local children began to develop arthritis symptoms. </li>
            <li>Famous people who have had Lyme disease include President George W. Bush, novelist Amy Tan, and actors Richard Gere and Parker Posey. </li>
            <li>Deer ticks spread Lyme disease on the east coast and Midwest. On the west coast, western black-legged ticks carry it.</li>
            <li> An infected tick must be attached to a person for at least 36 hours to spread Lyme disease.</li>
          </ul>
          <h4>Fact</h4>
          <p>The ticks that can spread Lyme disease are about the size of a sesame seed.</p>
        </div>





      </div>
      <hr/>

      <div className="col-12 d-flex justify-content-between  ">
        <div className='col-5'>
           <button name="" id="" class="btn p-4 form-control w-100 previous-btn" >
          <Link href="/conditions" className=" text-decoration-none text-reset">
            Previous
          </Link>
        </button>{" "}
        </div>
       
        <div className='col-5'>    
         <button name="" id=""class="btn p-4 form-control w-100 continue-btn">
          <Link href="/treatment" className=" text-decoration-none text-reset">
            Continue
          </Link>
        </button>
           </div>
   
      </div>
    </div>
  </div>
  )
}
