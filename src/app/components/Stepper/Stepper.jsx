"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Info from '../../info/page'
// import Info from '../../components/Info/Info';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../Header/Header';
import Symptoms from'../../symptoms/page'
import Conditions from'../../conditions/page'
import Details from'../../details/page'
import Treatment from'../../treatment/page'
import Questions from'../../questions/page'
import './Stepper.css'

const steps = ['INFO', 'SYMPTOMS','QUESTIONS','CONDITIONS' , 'DETAILS', 'TREATMENT'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="container">  
      <Header/>

    <div className="shadow">
   
  <div className="row  justify-content-center align-items-center g-2   p-4 mt-4">
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} className='d-none d-lg-flex'>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
               
               
            {activeStep == 0 && <Symptoms/> }
            {activeStep == 1 && <Questions/> }
            {activeStep == 2 && <Conditions/> }
            {activeStep == 3 && <Details/> }
            {activeStep == 4 && <Treatment/> }
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1} </Typography> */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}> */}
          <div className="col-12 d-flex justify-content-between p-4 pt-0 " >
        <div className='col-5'>
            <button
            className='previous-btn className="btn p-4 form-control w-100 " '
              // color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              // sx={{ mr: 1 }}
            >
              Previous
            </button>
    </div>

            {/* <Box sx={{ flex: '1 1 auto' }} /> */}
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
        <div className='col-5'>

            <button onClick={handleNext} className='continue-btn btn p-4 form-control w-100 continue-btn'>
              {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
            </button>
    </div>
    </div>

          {/* </Box> */}
        </React.Fragment> 
      )}
    </Box> 
    </div>
    </div>
    </div>
  
  );
}