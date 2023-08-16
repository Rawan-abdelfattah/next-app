import React from "react";
import "./info.css";
import Link from "next/link";
export default function info() {
  return (
    <>
      <div className="container w-50">
        <div class="row  justify-content-center align-items-center g-2  shadow p-4 mt-4">
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
          <div className=" row mt-4 ">
            <div className="col-6 d-flex justify-content-around">
              <p className="age">Age</p>
            </div>
            <div className="col-6 d-flex justify-content-around">
              <p className="sex">Sex</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-around">
            <input
              type="text"
              className=" age-input form-control"
              style={{ marginLeft: "130px" }}
            />

            <div className="flex-column" style={{ marginLeft: "180px" }}>
              <a name="" id="" class="btn male-btn" href="#" role="button">
                Male
              </a>
              <a name="" id="" class="btn female-btn" href="#" role="button">
                Female
              </a>
            </div>
          </div>
          <div className="col-12 text-center">
            <button name="" id="" class="btn " role="button">
              <Link href="/symptoms" className="btn continue-info-btn">
                Continue
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
