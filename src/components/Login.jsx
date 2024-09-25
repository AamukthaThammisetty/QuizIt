import React from 'react'
import backgroundImage from "/bg.jpg"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import { useState } from 'react'
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/courses');
  };

  return (
    <div className='h-screen bg-cover text-white'       style={{ backgroundImage: `url(${backgroundImage})` }}
>
       <>
          <Navbar/>
          <section className="mt-24 mx-auto max-w-screen-xl pb-4 pt-16 px-4 sm:px-8">
              <div className="text-center space-y-4">
                  <h1 className=" font-bold text-2xl md:text-5xl">
                       Quiz It 
                  </h1>
                  <p className=" max-w-xl mx-auto  text-3xl leading-relaxed">
                      “I had no idea Quizizz
                      could do that.”
                   </p>
              </div>
              <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                  <a href="javascript:void(0)" onClick={handleLogin} className="px-10 font-bold py-3.5 w-full bg-[#c40094] border-3px border border-[#fff] text-white text-center rounded-md shadow-md block sm:w-auto">
                      LogIn
                  </a>
                  <a href="javascript:void(0)" className="px-10 py-3.5 font-bold text-[#c40094] w-full  bg-white border-6px border-[#c40094] text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                      SignIn
                  </a>
              </div>
          </section>
      </>
    </div>
  )
}

export default Login
