import Link from "next/link";
import React from "react";
import "./symptoms.css";
import  body  from "../../assets/body.jpg";
import calendar from "../../assets/calendarr.jpg"
import Header from "../components/Header/Header";

import Image from "next/image";
import Multistep from "../components/Multistep/Multistep";
// import  calender   from "../../assets/calender.jpg";

export default function symptoms() {
  return (
    <>
      <div className="container"  >
        <Header/>
        <div className="shadow">
          <Multistep/>

        <div class="row  justify-content-center align-items-center g-2    p-4 mt-1">
          <h3>What are your symptoms?</h3>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control shadow symptoms-input pt-4 pb-4"
              name
              id
              aria-describedby="helpId"
              placeholder="Type your main symptom her "
            />
            <div className="text-center">
              <Image src={calendar} className="w-100 d-flext align-items-center justify-content-center mt-1  " alt />
</div>
          </div>
          <div className="col-lg-6">
            <Image src={body} className="w-100 " height={600}  alt />
          </div>
          <hr/>

          <div className="col-12 d-flex justify-content-between  " >
        <div className='col-5'>
           <button name="" id="" class="btn p-4 form-control w-100 previous-btn" >
          <Link href="/info" className=" text-decoration-none text-reset">
            Previous
          </Link>
        </button>{" "}
        </div>
       
        <div className='col-5'>    
         <button name="" id=""class="btn p-4 form-control w-100 continue-btn">
          <Link href="/questions" className=" text-decoration-none text-reset">
            Continue
          </Link>
        </button>
           </div>
   
      </div>
        </div>
      </div>
      </div>
    </>
  );
}
