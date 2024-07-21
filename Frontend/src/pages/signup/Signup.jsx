import React from 'react'
import { GenderCheakbox } from './GenderCheakbox';

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-200">Sign Up</span>
          <span className="text-gray-900 font-serif ml-2">ChitChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name..."
              className="w-full input input-bordered  h-30"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username..."
              className="w-full input input-bordered  h-30"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password..."
              className="w-full input input-bordered  h-30"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password:</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password..."
              className="w-full input input-bordered  h-30"
            />
          </div>
          {/* gender cheakbox */}
            <GenderCheakbox/>
          <a
            href="#"
            className="text-sm hover:underline hover:text-red-700 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
