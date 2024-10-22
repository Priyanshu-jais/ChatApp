import React, { useState } from 'react'
import { GenderCheakbox } from './GenderCheakbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

export default function Signup() {
  const [inputs,setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender:''
  });
 
  const {loading,signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender});
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-blue-200">Sign Up</span>
          <span className="text-gray-900 font-serif ml-2">ChitChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name..."
              className="w-full input input-bordered h-30"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username..."
              className="w-full input input-bordered h-30"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password..."
              className="w-full input input-bordered h-30"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password:</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="w-full input input-bordered h-30"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* gender cheakbox */}
          <GenderCheakbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-red-700 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2"
            disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
