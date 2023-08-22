"use client";
import React from "react";
import "./info.css";
import Link from "next/link";
import Header from "../components/Header/Header";
import Multistep from "../components/Multistep/Multistep";
import Stepper from "../components/Stepper/Stepper";
import { useSelector, useDispatch } from "react-redux";
import { genderChange, ageChange } from "@/redux/reducers/user";
import { notifyInfo } from "../components/Notify/Notify";
import { useRouter } from "next/navigation";

export default function info() {
  const gender = useSelector((state) => state.user.gender);
  const age = useSelector((state) => state.user.age);
  const router = useRouter();

  const dispatch = useDispatch();
  function handleNext() {
    if (age > 100 || age < 1) return notifyInfo("Please enter a valid age !! ");
    router.push("/symptoms");
  }
  return (
    <>
      <div className="container">
        <Header />
        <div className="shadow">
          {/* <Multistep /> */}
          {/* <Stepper/> */}

          <div className="row  justify-content-center align-items-center g-2  p-4 mt-4">
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

                <input
                  type="number"
                  value={age}
                  max={100}
                  onChange={(e) => dispatch(ageChange(e.target.value))}
                  min={1}
                  className=" age-input  "
                />
              </div>
              <div className="col-lg-6  text-center">
                <p className="sex">Sex</p>
                <div className=" ">
                  <button
                    name=""
                    style={{
                      backgroundColor:
                        gender == "male" ? "#3ca2e7de" : "#e7f2f9",
                      color: gender == "male" && "#fff",
                    }}
                    id=""
                    onClick={() => dispatch(genderChange("male"))}
                    className="btn male-btn"
                    href="#"
                    role="button"
                  >
                    Male
                  </button>
                  <button
                    name=""
                    id=""
                    style={{
                      backgroundColor:
                        gender == "female" ? "#3ca2e7de" : "#e7f2f9",
                      color: gender == "female" && "#fff",
                    }}
                    onClick={() => dispatch(genderChange("female"))}
                    className="btn female-btn"
                    href="#"
                    role="button"
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            <div className="col-5">
              <button
                name=""
                id=""
                className="btn p-4 form-control w-100 continue-info-btn"
                disabled={!gender || !age}
                onClick={handleNext}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
