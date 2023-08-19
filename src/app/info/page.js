import React from "react";
import "./info.css";
import Link from "next/link";
import Header from "../components/Header/Header";
import Multistep from "../components/Multistep/Multistep";
export default function info() {
  return (
    <>
      <div className="container">
        <Header/>
        <div className="shadow">
          <Multistep/>

{/*      
        <div className='step-row mb-0 w-100 d-flex justify-content-between  d-none d-lg-flex'>
        <div id='progress'></div>
        <div className='step-col p-4 '>INFO</div>
        <div className='step-col  p-4 ' >SYMPTOMS</div>
        <div className='step-col   p-4 '>QUESTIOND</div>
        <div className='step-col  p-4 '>DETAILS</div>
        <div className='step-col  p-4 '>CONDITIONS</div>
        <div className='step-col  p-4 '>TREATMENT</div>
      </div> */}
        <div class="row  justify-content-center align-items-center g-2   p-4 ">

          <div className="col-12 text-center">
            <h1 className="font-size-2rem mb-4 ">
              <span className="text-color"> Elahly</span> Hospital Symptom
              Checker
              <span className="text-color font-size-1rem">WITH BODY MAP</span>
            </h1>
            <h2 className="text-secondary font-size-mediam mt-4 mb-4">
              Identify possible conditions and treatment related to your
              symptoms.
            </h2>
            <p className="font-size-1rem">
              This tool does not provide medical advice.
              <span className="text-color">See additional information </span>
            </p>
          </div>
          <div className=" row mt-4  ">
            <div className="col-lg-6 text-center mb-4 pb-4">
              <p className="age">Age</p>

              <input type="text" className=" age-input  " />
            </div>
            <div className="col-lg-6  text-center">
              <p className="sex">Sex</p>
              <div className=" ">
                <a name="" id="" class="btn male-btn" href="#" role="button">
                  Male
                </a>
                <a name="" id="" class="btn female-btn" href="#" role="button">
                  Female
                </a>
              </div>
            </div>
          </div>

          <div className="col-5">
            <button
              name=""
              id=""
              class="btn p-4 form-control w-100 continue-info-btn"
            >
              <Link
                href="/symptoms"
                className=" text-decoration-none text-reset"
              >
                Continue
              </Link>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
