"use client";

// src/store/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    gender:"",
    age:"",
    symptoms:[],
    bothering:"",
    pregnant :"",
    medications:"",
    conditions:"",

    disease:[]
  },
  reducers: {
    genderChange: (state,action) => {
       state.gender=action.payload
    },
    ageChange: (state,action) => {
       state.age=action.payload
    },
    addSymptom: (state, action) => {
      state.symptoms.push(action.payload);
    },
    removeSymptom:(state,action)=>{
       state.symptoms.splice(action.payload)
    },
    setBothering:(state,action)=>{
      state.bothering=action.payload
   },
   setPregnant:(state,action)=>{
    state.pregnant=action.payload
  },
    setMedications:(state,action)=>{
      state.medications=action.payload
    },
    setConditions:(state,action)=>{
      state.conditions=action.payload
    },
    setDisease:(state,action)=>{
      state.disease=action.payload
    }

  },
});

export const {
   genderChange ,
   ageChange,
   addSymptom,
   removeSymptom,
   setBothering,
   setPregnant,
   setMedications,
   setConditions,
   setDisease
  } = user.actions;
export default user.reducer;
