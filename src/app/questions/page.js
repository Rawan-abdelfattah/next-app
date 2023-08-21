"use client";

import Link from "next/link";
import React ,{useState} from "react";
import "./questions.css";
import Header from "../components/Header/Header";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
import { setPregnant,setBothering,setMedications,setConditions ,setDisease} from "@/redux/reducers/user";
import axios from 'axios';

export default function questions() {
  const symptoms= useSelector((state)=>state.user.symptoms)
  const router = useRouter();
  const bothering= useSelector((state)=>state.user.bothering)
  const conditions= useSelector((state)=>state.user.conditions)
  const pregnant= useSelector((state)=>state.user.pregnant)
  const medications= useSelector((state)=>state.user.medications)
  const [loading,setLoading]= useState(false)
  const age= useSelector((state)=>state.user.age)
  const gender= useSelector((state)=>state.user.gender)
  if(!age) router.push("/info")
  const dispatch= useDispatch()


  // const options = {
  //   method: 'POST',
  //   url: 'https://symptom-checker4.p.rapidapi.com/analyze',
  //   params: {
  //     symptoms: bothering  ? bothering : symptoms.join(" ")
  //   },
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '248537f07cmshaa567e1b965246ap1e86a5jsn463ec6aab09d',
  //     'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
  //   },
  //   data: {
  //      symptoms: "My symptoms i"
  //       // `My symptoms is ${symptoms.join(" ")} ,
  //       // ${medications && `I have this medications ${medications} ,
  //       // ${conditions && `My current condition is ${conditions}`}`}
  //       // , ${pregnant=="yes" ? "I am pregnant":"I am not pregnant"},
  //       //  My age is ${age} , my gender is ${gender}
  //       // `
  //   }
  // };
  

  
const options = {
  method: 'POST',
  url: 'https://symptom-checker4.p.rapidapi.com/analyze',
  params: {
    symptoms: '<REQUIRED>'
  },
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '248537f07cmshaa567e1b965246ap1e86a5jsn463ec6aab09d',
    'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
  },
  data: {
    symptoms: 
    `My symptoms is ${symptoms.join(" ")} ,
  ${medications && `I have this medications ${medications} ,
  ${conditions && `My current condition is ${conditions}`}`}
   , ${pregnant=="yes" ? "I am pregnant":"I am not pregnant"},
    My age is ${age} , my gender is ${gender}
  `
  }
};

  async function handleSubmit(){
    try {
      console.log(options)
      setLoading(true)
      const response = await axios.request(options)
      .then((res)=>{
        router.push("/conditions")
        setLoading(false)
        dispatch(setDisease(res?.data?.potentialCauses))
      })
      .catch((err)=>{
      console.log(err);
      })
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="container ">
      <Header/>
      <div class="row  justify-content-center align-items-center g-2  shadow p-4 mt-4">
        <div className="col-lg-6">
          {" "}
          <h2>Please tell us more </h2>
          {symptoms.length ==1 && <Link href="/conditions" className="text-color mb-4  skip-section">Skip this section </Link>}
          <div className="col-12 ">
            <h4>Which symptom is bothering you the most?</h4>
<div>
 { symptoms.map((ele,ind)=>(
    <div className="form-check ">
      <input className="form-check-input fs-5 " value={ele} onChange={((e)=>dispatch(setBothering(e.target.value)))} type="radio" name="exampleRadios" id={ind.toString()}  />
      <label className="form-check-label fs-5" htmlFor={ind.toString()} style={{width:"100%"}}>
        {ele}
      </label>
    </div>
 ))
  }
 
</div>

      <p className="text-secondary mt-4">
        Identifying your primary symptom affects your possible conditions
        list.
      </p>
          </div>
          <div className="col-12 mt-4 pt-4 mb-4 pb-4">
          <button className="btn continue-answer" disabled={loading} role="button" onClick={handleSubmit}>
            {/* <Link href="/conditions" className="btn continue-answer"> */}
             {loading? "Loading ...": "Continue"}
            {/* </Link> */}
          </button>
          <p className="text-secondary">Or answer more optional questions below</p>

          </div>

          <div className="col-12">
            <h4> Could you be pregnant? <span className="text-secondary fs-6"> (optional)</span> </h4>
            <div className=" ">
              <button name="" style={{backgroundColor:pregnant=="yes"? "#3ca2e7de":"#e7f2f9",color:pregnant=="yes"&& "#fff"}}  class="btn yes-btn" role="button" onClick={()=>dispatch(setPregnant("yes"))}>
                yes
              </button>
              <button name="" style={{backgroundColor:pregnant=="no"? "#3ca2e7de":"#e7f2f9",color:pregnant=="no"&& "#fff"}}  class="btn no-btn" role="button" onClick={()=>dispatch(setPregnant("no"))}>
                no
              </button>
            </div>
            </div>
          <div className="col-12 mb-4 mt-4 pt-4 ">
            <h4>Current medications </h4>
            <p className="text-secondary">
              (optional) <br />
              Only some conditions are factored into results.
            </p>
            <input
              type="text"
              className="form-control shadow mb-4 mt-4 pt-4 pb-4"
              name
              id
              placeholder="e.g., Lipitor  "
              onChange={(e)=>dispatch(setMedications(e.target.value))}
            />
          </div>
          <div className="col-12 mt-4 pt-4">
            <h4>Past or current conditions</h4>
            <p className="text-secondary">
              (optional) <br />
              Only some conditions are factored into results.
            </p>
            <input
              type="text"
              className="form-control shadow mb-4 mt-4 pt-4 pb-4"
              name
              id
              placeholder="e.g., Arthrities "
              onChange={(e)=>dispatch(setConditions(e.target.value))}
            />
          </div>
          <div className="col-12"></div>
        </div>
        <hr />
        <div className="col-12 d-flex justify-content-between  ">
        <div className='col-5'>
           <button name=""  class="btn p-4 form-control w-100 previous-btn" >
          <Link href="/symptoms" className=" text-decoration-none text-reset">
            Previous
          </Link>
        </button>{" "}
        </div>
       
        <div className='col-5'>    
         <button name=""  disabled={loading} class="btn p-4 form-control w-100 continue-btn" onClick={handleSubmit}>
          {/* <Link href="/conditions" className=" text-decoration-none text-reset"> */}
          {loading? "Loading ...": "Continue"}
          {/* </Link> */}
        </button>
           </div>
   
      </div>
      </div>
    </div>
  );
}
