"use client";

import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { notifyInfo } from '../Notify/Notify';
import { addSymptom, removeSymptom } from '@/redux/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import {AiFillCloseCircle} from "react-icons/ai"
import symptomsData from "../../../data/abdomen/allAbdomen.json";

const SymptomsAutoComplete = () => {
  
  const dispatch =useDispatch()
  const symptoms= useSelector((state)=>state.user.symptoms)
  const [input, setInput] = React.useState([]);

  function handleSelect (e){
    let data = e[0]
    if(symptoms.includes(data)) return notifyInfo("Sympton is already added")
    console.log(data);
    dispatch(addSymptom(data))
    setInput([])
  }
  function handleDelete(index){
    dispatch(removeSymptom(index))
  }
  return (
    <div>
      <Typeahead
        id="autocompleteInput"
        labelKey="name"
        options={symptomsData}
        placeholder="Search for symptom..."
        selected={input}
        onChange={handleSelect}
      />
      <div className="row mt-4">
        {
          symptoms.map((ele,ind)=> <div key={ind} className='my-2  col-12 sympton-btn'>{ele} <AiFillCloseCircle className='close-btn' onClick={()=>handleDelete(ind)}/></div>)
        }
      </div>
    </div>
  );
};

export default SymptomsAutoComplete;