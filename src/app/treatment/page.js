import Link from "next/link";
import React from "react";
import "./treatment.css";
import Header from "../components/Header/Header";
export default function treatment() {
  return (
    <div className="container ">
      <Header/>
      <div class="row  g-2  shadow p-4 mt-4">
        <div className="col-lg-4">
          <h4>Conditions that match your symptoms</h4>
          <span style={{ color: "#0696f3" }}>UNDERSTANDING YOUR RESULTS</span>

          <div className="disease-card w-100 shadow p-4 rounded gy-4 mb-2">
            <p> Lyme Disease </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <p className="text-secondary mt-3">Moderate match</p>
          </div>
          <div className="disease-card w-100 shadow p-4 rounded gy-4 mb-2">
            <p> Lyme Disease </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <p className="text-secondary mt-3">Moderate match</p>
          </div>
          <div className="disease-card w-100 shadow p-4 rounded gy-4 mb-2">
            <p> Lyme Disease </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <p className="text-secondary mt-3">Moderate match</p>
          </div>
          <div className="disease-card w-100 shadow p-4 rounded gy-4 mb-3">
            <p> Lyme Disease </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <p className="text-secondary mt-3">Moderate match</p>
          </div>
        </div>

        <div className="col-lg-7 m-3">
          {/* <div></div> */}
          <h3
            className="text-center "
            style={{ marginTop: "70px", fontWeight: "700", color: "#6d6d6d" }}
          >
            Lyme Disease{" "}
          </h3>
          <h6 className="text-center"> Borreliosis</h6>
          <div className="d-flex justify-content-around mt-4">
          <p>
              <Link
                href={"/conditions"}
                className=" text-decoration-none text-reset"
              >
                CONDITION
              </Link>{" "}
            </p>
            <p>
           
                TREATMENT OPTIONS
            
            </p>
          </div>
          <hr />
          <div className="col-12 text-center">
            <h4>Do you think you have this condition?</h4>{" "}
            <div className=" ">
              <a name="" id="" class="btn yes-btn" href="#" role="button">
                Yes
              </a>
              <a name="" id="" class="btn no-btn" href="#" role="button">
                No
              </a>
              <a name="" id="" class="btn no-btn" href="#" role="button">
                Maybe
              </a>
            </div>
          </div>{" "}
          <hr />
          <div className="mt-4 pt-4">
            <h4>Take Care Of Yourself
</h4>
            <p>
            Lyme disease always needs medical treatment. Your doctor may suggest over-the-counter NSAIDs -- such as ibuprofen, ketoprofen, and naproxen -- for joint pain and swelling. When you're outside in an area with ticks, use insect repellent with 20% to 30% DEET and check yourself -- and your children -- for ticks afterward.
            </p>
          </div>
          <hr />
          <div className="mt-4 pt-4">
            <h4>What To Expect</h4>
            <p>
            Ticks that spread Lyme disease are so small that many people never notice the bite. Lyme disease can be hard to diagnose. While it often causes a distinct symptom within a month of the bite -- a red, ringed rash that looks like a bulls-eye -- many people with Lyme disease never develop it. Instead, they may have vague flu-like symptoms and fatigue. As long as a person starts treatment quickly, antibiotics usually cure the infection without other problems. Without treatment, Lyme disease can progress and cause painful joints. Rarely, it can cause memory problems, mood changes, heart rhythm problems, and other issues. For some people, these symptoms linger even after treatment.
            </p>
          </div>
          <hr />
          <div className="col-12">
            <h4>Did You Know?</h4>
            <ul>
              <li>
                Lyme disease gets its name from Lyme, Connecticut. Researchers
                first discovered the disease there in the 1970s when local
                children began to develop arthritis symptoms.{" "}
              </li>
              <li>
                Famous people who have had Lyme disease include President George
                W. Bush, novelist Amy Tan, and actors Richard Gere and Parker
                Posey.{" "}
              </li>
              <li>
                Deer ticks spread Lyme disease on the east coast and Midwest. On
                the west coast, western black-legged ticks carry it.
              </li>
              <li>
                {" "}
                An infected tick must be attached to a person for at least 36
                hours to spread Lyme disease.
              </li>
            </ul>
            <h4>Fact</h4>
            <p>
              The ticks that can spread Lyme disease are about the size of a
              sesame seed.
            </p>
          </div>
        </div>
        <hr />

        <div className="col-12 d-flex justify-content-between  ">
          <div className="col-5">
            <button
              name=""
              id=""
              class="btn p-4 form-control w-100 previous-btn"
            >
              <Link
                href="/conditions"
                className=" text-decoration-none text-reset"
              >
                Previous
              </Link>
            </button>{" "}
          </div>

          <div className="col-5">
            <button
              name=""
              id=""
              class="btn p-4 form-control w-100 continue-btn"
            >
              <Link
                href="/treatment"
                className=" text-decoration-none text-reset"
              >
                Continue
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
