"use client";

import Link from "next/link";
import React from "react";
import "./symptoms.css";
import  body  from "../../assets/body.jpg";
import Header from "../components/Header/Header";
import SymptomsAutoComplete from './../components/SymptomsAutoComplete/SymptomsAutoComplete';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'

export default function symptoms() {
  const symptoms= useSelector((state)=>state.user.symptoms)
  const router = useRouter();
  const dispatch = useDispatch()
  const age= useSelector((state)=>state.user.age)
  if(!age) router.push("/info")
  
  return (

    <>
      <div className="container ">
        <Header/>
        <div className="row  justify-content-center align-items-center g-2  shadow p-4 mt-4">
          <h3>What are your symptoms?</h3>
          <div className="col-lg-6">
            {/* <datalist
              type="text"
              className="form-control shadow symptoms-input pt-4 pb-4"
              name
              id
              aria-describedby="helpId"
              placeholder="Type your main symptom her "
            /> */}
            <SymptomsAutoComplete/>
            <div className="text-center"><img src="https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?" className="w-50 d-flext align-items-center justify-content-center mt-4 mb-4" alt />
        </div>
          </div>
          <div className="col-lg-6">
            <img src="https://www.cdc.gov/dengue/images/symptoms/DengueSymptomsUpdated.jpg?_=45121" style={{height:"70vh"}} className="w-100 mt-4 mb-4" alt />
          </div>
          <hr/>

          <div className="col-12 d-flex justify-content-between  ">
        <div className='col-5'>
           <button name="" id="" className="btn p-4 form-control w-100 previous-btn" onClick={()=>router.push("/info")}>
            Previous
        </button>{" "}
        </div>
       
        <div className='col-5'>    
         <button name="" id="" onClick={()=>router.push("/questions")} disabled={!symptoms.length} className="btn p-4 form-control w-100 continue-btn">
            Continue
        </button>
           </div>
   
      </div>
        </div>
      </div>
    </>
  );
}
