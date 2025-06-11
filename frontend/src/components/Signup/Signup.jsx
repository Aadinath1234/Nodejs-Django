import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
       <Link to="/">
       <img
          src="/assets/signup.jpg"
          alt="side visual"
          className="w-full h-full object-cover"
        />
       </Link> 
      </div>

      {/* Right Side Form */}
      <div className="flex justify-center items-center w-full md:w-1/2 bg-base-200">
        <fieldset className="w-full max-w-md bg-base-200  border border-base-300 rounded-box p-6 md:p-10 gap-4">
          {/* Header and Branding */}
          <div className="text-center">
           <Link to="/">
           <img
              src="/assets/name.png"
              alt="Brand logo"
              className="mx-auto mb-4"
            />
           </Link> 
            <p className="font-bold text-2xl">Welcome to Gigfloww</p>
            <div className="mt-2 font-[Montserrat]">
             
              <p className="font-medium">Seamless HR operations start now!</p>
              <p>SignUp</p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 mt-8">
            <label className="label">Name</label>
            <input
              type="text"
              className="input rounded-2xl w-full"
              placeholder="Name"
            />

            <label className="label">Work Email </label>
            <input
              type="email"
              className="input rounded-2xl w-full"
              placeholder="Email Address"
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input rounded-2xl w-full"
              placeholder="Password"
            />

            <button className="btn bg-sky-600 mt-4 text-white ">
              Signup For Free{" "}
            </button>

            <div className="mt-6 text-center">
              <p>
                By clicking on signup you agree to our{" "}
                <button className="text-blue-600 underline ml-1">
                  Terms and Conditions
                </button>
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 w-full h-full">
              <button className="flex items-center gap-2 rounded-2xl bg-transparent border-2 border-gray-400 p-2 text-black w-full md:w-auto">
                <span>Already on Gigfloww ? 

                </span>
                <button className="text-blue-600 underline ml-1">Log in </button>
              </button>
            </div>
          </div>
        </fieldset>

        <div></div>
      </div>
    </div>
  );
}

export default Signup;
