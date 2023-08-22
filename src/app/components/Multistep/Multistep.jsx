"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './Multistep.css';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'INFO',
    'SYMPTOMS',
    'QUESTIOND',
    'DETAILS',
    'CONDITIONS',
    'TREATMENT'
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div className='step-row mb-0 w-100 justify-content-between d-none d-lg-flex'>
        <div id='progress'></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-col p-4 ${index === currentStep ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>

      <button id='back' onClick={handleBack} disabled={currentStep === 0}>
        Back
      </button>
      <button id='next' onClick={handleNext} disabled={currentStep === steps.length - 1}>
        Next
      </button>

      <div>
        {/* Add routing links to different steps */}
        {currentStep === 0 && <Link href='/symptoms'>Go to Step 1</Link>}
        {currentStep === 1 && <Link href='/details'>Go to Step 2</Link>}
        {/* Add more links for other steps */}
      </div>
    </div>
  );
};

export default Stepper;
