import Link from "next/link";
import React from "react";
import "./questions.css";
export default function questions() {
  return (
    <div className="container ">
      <div class="row  justify-content-center align-items-center g-2  shadow p-4 mt-4">
        <div className="w-50">
          {" "}
          <h2>Please tell us more </h2>
          <h5 className="text-color mb-4 pb-4">Skip this section </h5>
          <div className="col-12 ">
            <h4>Which symptom is bothering you the most?</h4>
<div>
  <div className="form-check ">
    <input className="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
    <label className="form-check-label fs-5" htmlFor="exampleRadios1">
      tiredness
    </label>
  </div>
  <div className="form-check ">
    <input className="form-check-input fs-5 " type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
    <label className="form-check-label fs-5" htmlFor="exampleRadios2">
      abdominal tingling
    </label>
  </div>
 
</div>

            <p className="text-secondary mt-4">
              Identifying your primary symptom affects your possible conditions
              list.
            </p>
          </div>
          <div className="col-12 mt-4 pt-4 mb-4 pb-4">
          <button name="" id="" class="btn " role="button">
            <Link href="" className="btn continue-answer">
              Continue
            </Link>
          </button>
          <p className="text-secondary">Or answer more optional questions below</p>

          </div>

          <div className="col-12">
            <h4> Could you be pregnant? <span className="text-secondary fs-6"> (optional)</span> </h4>
            <div className=" ">
              <a name="" id="" class="btn yes-btn" href="#" role="button">
                Male
              </a>
              <a name="" id="" class="btn no-btn" href="#" role="button">
                Female
              </a>
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
            />
          </div>
          <div className="col-12"></div>
        </div>
        <hr />
        <div className="col-12 d-flex justify-content-between btn-conainer ">
          <button name="" id="" class="btn " role="button">
            <Link href="/symptoms" className="btn previous-btn">
              Previous
            </Link>
          </button>{" "}
          <button name="" id="" class="btn " role="button">
            <Link href="/conditions" className="btn continue-btn">
              Continue
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
